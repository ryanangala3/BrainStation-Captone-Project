import React from 'react';
import './WorkoutList.scss';

function WorkoutList({workouts, selectedWorkoutId}) {

  const storedData = JSON.parse(sessionStorage.getItem('workoutData')) || [];

  const allWorkouts = [...workouts, ...storedData];

  return (
    <div>
      <div className="workout-list__container">
        <h1 className="workout-list__title">Your Workouts</h1>
      {allWorkouts
      .filter((workout) => workout.workout_name !== selectedWorkoutId)
      .map(workout => (
              <li className='workout-items__container' key={workout.workout_name}>
                <h4 className='workout-item'>{workout.workout_name}</h4>
                <h4 className='workout-item'>{workout.duration}</h4>
                <h4 className='workout-item'>{workout.date}</h4>
            </li>
        ))}
      </div>
    </div>
  )
}

export default WorkoutList

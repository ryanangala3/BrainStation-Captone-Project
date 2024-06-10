import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import "./WorkoutLog.scss";

function WorkoutLog({ selectedWorkout }) {
  

  return (
    <div className='log-container'>
        <div className="log-title__container">
            <h2 className='log-title'>{selectedWorkout.workout_name}</h2>
        </div>
        <div className="log-subtitle__container">
            <h3 className='log-subtitle' key={selectedWorkout.key}>{selectedWorkout.date}</h3>
            <h4 className='log-duration' key={selectedWorkout.key}>{selectedWorkout.duration}</h4>
        </div>
        <ul className="log-exercise__list">
          <li className='log-exercise__container'>
          <h4 className='exercise-name'>Exercise:</h4>
                <h4 className='exercise-name'>Type:</h4>
                <h4 className='exercise-name'>Sets:</h4>
                <h4 className='exercise-name'>Reps:</h4>
          </li>
        {selectedWorkout.exercises.map(exercise => (
              <li className='log-exercise__container' key={exercise.exercise_name}>
                <h4 className='exercise-name'>{exercise.exercise_name}</h4>
                <h4 className='exercise-name'>{exercise.type}</h4>
                <h4 className='exercise-name'>{exercise.sets}</h4>
                <h4 className='exercise-name'>{exercise.reps}</h4>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default WorkoutLog

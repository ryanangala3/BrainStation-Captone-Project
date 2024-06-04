import React from 'react'
import "./WorkoutLog.scss"

function WorkoutLog() {


  return (
    <div className='log-container'>
        <div className="log-title__container">
            <h2 className='log-title'>User's Workout</h2>
        </div>
        <div className="log-subtitle__container">
            <h3 className='log-subtitle'>"Workout Name</h3>
        </div>
        <ul className="log-exercise">
            
        </ul>
    </div>
  )
}

export default WorkoutLog

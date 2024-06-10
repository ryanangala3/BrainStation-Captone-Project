import React from 'react';
import { useState, useEffect } from 'react';
import "./WorkoutLogPage.scss";
import WorkoutLog from '../../components/WorkoutLog/WorkoutLog.jsx';
import Header from '../../components/Header/Header.jsx';
import data from "../../data/workout-log.js";
import WorkoutGraph from '../../components/WorkoutGraph/WorkoutGraph.jsx';
import WorkoutForm from '../../components/WorkoutForm/WorkoutForm.jsx';
import WorkoutList from '../../components/WorkoutList/WorkoutList.jsx';
import Footer from '../../components/Footer/Footer.jsx';

function WorkoutLogPage() {

    const [workouts, setWorkouts] = useState(data);
    const [selectedWorkout, setSelectedVideo]= useState(data[0]);

    useEffect(() => {
      const storedWorkouts = JSON.parse(sessionStorage.getItem('workoutData')) || [];
      setWorkouts([...data, ...storedWorkouts]); 
  }, []);

    const handleSubmit = (submittedData) => {
      setWorkouts([...workouts, submittedData]);
  };



  return (
    <div>
      <Header />
      <div className="workout-log__container">
      <WorkoutLog selectedWorkout={workouts[0]} />
      <WorkoutGraph workouts={workouts} />
      </div>
      <WorkoutList workouts={workouts} />
      <WorkoutForm onSubmit={handleSubmit} />
      <Footer />
    </div>
  )
}

export default WorkoutLogPage

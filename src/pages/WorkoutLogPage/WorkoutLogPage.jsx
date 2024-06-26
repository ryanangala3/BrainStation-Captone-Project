import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./WorkoutLogPage.scss";
import WorkoutLog from "../../components/WorkoutLog/WorkoutLog.jsx";
import Header from "../../components/Header/Header.jsx";
import data from "../../data/workout-log.js";
import WorkoutGraph from "../../components/WorkoutGraph/WorkoutGraph.jsx";
// import WorkoutForm from "../../components/WorkoutForm/WorkoutForm.jsx";
import WorkoutList from "../../components/WorkoutList/WorkoutList.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const apiUrl = "http://localhost:5059/api/workouts";

function WorkoutLogPage() {
  const [workouts, setWorkouts] = useState(data);
  const [selectedWorkout, setSelectedWorkout] = useState(data[0]);

  // useEffect(() => {
  //   const storedWorkouts =
  //     JSON.parse(sessionStorage.getItem("workoutData")) || [];
  //   const combinedWorkouts = [...data, ...storedWorkouts].sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   );
  //   setWorkouts(combinedWorkouts);
  //   if (combinedWorkouts.length > 0) {
  //     setSelectedWorkout(combinedWorkouts[0]);
  //   }
  // }, []);

  // const handleSubmit = (submittedData) => {
  //   const newWorkout = {
  //     ...submittedData,
  //     id: Date.now(),
  //     date: new Date().toISOString().split("T")[0],
  //   };

  //   const newWorkouts = [newWorkout, ...workouts].sort(
  //     (a, b) => new Date(b.date) - new Date(a.date)
  //   );
  //   setWorkouts(newWorkouts);
  //   setSelectedWorkout(newWorkout);
  //   sessionStorage.setItem(
  //     "workoutData",
  //     JSON.stringify(
  //       newWorkouts.filter((workout) => !data.some((d) => d.id === workout.id))
  //     )
  //   );
  // };

  useEffect(() => {
    const getWorkouts = async () => {
      const response = await axios.get(apiUrl);
      setWorkouts(response.data);
    };
    getWorkouts();
  }, [workouts]);

  return (
    <div>
      <Header />
      <div className="workout-log__container">
        <WorkoutLog selectedWorkout={workouts[0]} />
        <WorkoutGraph workouts={workouts} />
      </div>
      {/* <WorkoutForm onSubmit={handleSubmit} /> */}
      <WorkoutList workouts={workouts} />
      <Footer />
    </div>
  );
}

export default WorkoutLogPage;

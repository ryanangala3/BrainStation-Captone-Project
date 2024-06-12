import React from "react";
import { useState } from "react";
import "./WorkoutForm.scss";

function WorkoutForm({ onSubmit }) {
  const [fields, setFields] = useState([
    { exercise: "", type: "", sets: "", reps: "", duration: "" },
  ]);

  const handleAddFields = () => {
    setFields([
      ...fields,
      { exercise: "", type: "", sets: "", reps: "", duration: "" },
    ]);
  };

  const handleChange = (index, event) => {
    const newFields = fields.map((field, i) => {
      if (i === index) {
        return { ...field, [event.target.name]: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentDate = new Date().toISOString().split("T")[0];
    let totalDuration = 0;
    const newWorkout = {
      workout_name: event.target.workout_name.value,
      date: currentDate,
      exercises: fields.map((field) => ({
        exercise: field.exercise,
        type: field.type,
        sets: field.sets,
        reps: field.reps,
        duration: field.duration,
      })),
    };

    totalDuration = newWorkout.exercises.reduce((sum, exercise) => sum + parseInt(exercise.duration), 0);

    newWorkout.duration = totalDuration;
    console.log(totalDuration);

    onSubmit(newWorkout);

    setFields([{ exercise: "", type: "", sets: "", reps: "", duration: "" }]);

    event.target.workout_name.value = "";
  };

  return (
    <div className="workout-form__container">
      <div className="workout-form__title-container">
        <h1 className="workout-form__title">Log A Workout</h1>
      </div>

      <div className="workout-form__subtitle-row">
        <div className="workout-form__subtitle-container">
          <h3 className="workout-form__subtitle">Exercise:</h3>
        </div>
        <div className="workout-form__subtitle-container">
          <h3 className="workout-form__subtitle">Type:</h3>
        </div>
        <div className="workout-form__subtitle-container">
          <h3 className="workout-form__subtitle">Sets:</h3>
        </div>
        <div className="workout-form__subtitle-container">
          <h3 className="workout-form__subtitle">Reps:</h3>
        </div>
        <div className="workout-form__subtitle-container">
          <h3 className="workout-form__subtitle">Duration:</h3>
        </div>
      </div>

      <form className="workout-form" onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div className="input-container" key={index}>
            <input
              className="workout-form__name-input"
              type="text"
              placeholder="Exercise"
              name="exercise"
              value={field.exercise}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              className="workout-form__name-input"
              type="text"
              placeholder="Type"
              name="type"
              value={field.type}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              className="workout-form__name-input"
              type="number"
              min={0}
              max={10}
              name="sets"
              value={field.sets}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              className="workout-form__name-input"
              type="number"
              min={0}
              max={99}
              name="reps"
              value={field.reps}
              onChange={(event) => handleChange(index, event)}
            />
            <input
              className="workout-form__name-input"
              type="text"
              placeholder="Duration"
              name="duration (minutes)"
              value={field.duration}
              onChange={(event) => handleChange(index, event)}
            />
          </div>
        ))}
        <div className="workout-name__input-container">
          <input
            className="workout-form__name-input-workout"
            type="text"
            placeholder="Workout Name"
            name="workout_name"
          />
        </div>
        <div className="button-container">
          <button
            className="add-more__button"
            type="button"
            onClick={handleAddFields}
          >
            Add More
          </button>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WorkoutForm;

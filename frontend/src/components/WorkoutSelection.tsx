// Import React Functionality
// import { useState } from "react";

// Import PrimeReact Components
import WorkoutCard from "./WorkoutCard";

// Scss styling
import "./WorkoutSelection.scss";

const WorkoutSelection = () => {
  return (
    <div className="workouts">
      <div className="title">Пора записать на тренеровку!</div>
      <div className="workout-cards-container">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
    </div>
  );
};

export default WorkoutSelection;

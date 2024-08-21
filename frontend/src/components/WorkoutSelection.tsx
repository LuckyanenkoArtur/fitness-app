// Import React Functionality
import { useGetWorkoutsQuery } from "../api/redux/features/workouts/workoutsApiSlice";

// Import PrimeReact Components
import WorkoutCard from "./WorkoutCard";

// Import Data models
import Workout from "../data/workouts";

// Scss styling
import "./WorkoutSelection.scss";

const WorkoutSelection = () => {
  const { data, isLoading, isError } = useGetWorkoutsQuery();

  return (
    <div className="workouts">
      <div className="title">Пора записать на тренеровку!</div>
      <div className="workout-cards-container">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error fetching workouts</div>
        ) : data?.workouts?.length > 0 ? (
          data.workouts.map((workout: Workout) => {
            return (
              <WorkoutCard
                id={workout.id}
                title={workout.title}
                duration={workout.duration}
                photo={workout.photo}
                key={workout.id}
                trainer={workout.trainer}
              />
            );
          })
        ) : (
          <div>No workouts available</div>
        )}
      </div>
    </div>
  );
};

export default WorkoutSelection;

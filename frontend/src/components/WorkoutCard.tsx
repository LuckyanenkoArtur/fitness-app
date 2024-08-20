import { Button } from "primereact/button";
import workouts from "../data/workouts";

interface WorkoutCardData {
  id: number;
  title: string;
  duration: string;
  trainer: string;
  image: string;
}

const WorkoutCard = () => {
  return (
    <>
      {workouts.map((workout: WorkoutCardData) => (
        <div
          className="workout-card"
          key={workout.id}
          style={{ backgroundImage: `url(${workout.image})` }}
        >
          <div className="workout-title">{workout.title}</div>
          <div className="workout-footer">
            <div className="workout-trainer-duration">
              <span>{workout.duration}</span> <br />
              <span>{workout.trainer}</span>
            </div>
            <Button
              label="Начать"
              style={{ backgroundColor: "#9657eb", borderColor: "#9657eb" }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkoutCard;

import { Button } from "primereact/button";
import Workout from "../data/workouts";

const WorkoutCard = ({
  id,
  title: name,
  trainer,
  duration,
  photo,
}: Workout) => {
  return (
    <div
      className="workout-card"
      key={id}
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className="workout-title">{name}</div>
      <div className="workout-footer">
        <div className="workout-trainer-duration">
          <span>{duration}</span> <br />
          <span>{trainer}</span>
        </div>
        <Button
          label="Запись"
          style={{ backgroundColor: "#9657eb", borderColor: "#9657eb" }}
        />
      </div>
    </div>
  );
};

export default WorkoutCard;

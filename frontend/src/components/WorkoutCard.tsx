import { Button } from "primereact/button";
import Workout from "../data/workouts";

import { useCreateScheduleMutation } from "../api/redux/features/schedules/schedulesApiSlice";

const WorkoutCard = ({
  id,
  title: name,
  trainer,
  duration,
  photo,
}: Workout) => {
  const [createSchedule] = useCreateScheduleMutation();
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
          onClick={() => {
            createSchedule({
              start_date: new Date().toLocaleString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }),
              workout_trainer: trainer,
              workout_id: id,
              workout_title: name,
            })
              .unwrap()
              .then()
              .catch((error) => console.log(error));
          }}
        />
      </div>
    </div>
  );
};

export default WorkoutCard;

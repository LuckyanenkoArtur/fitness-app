// Import PrimeReact Components
import { Button } from "primereact/button";

import { useCancelScheduleMutation } from "../api/redux/features/schedules/schedulesApiSlice";

// Scss styles
import "./ScheduleCard.scss";

interface SchedulesSectionProps {
  id: number;
  start_date: string;
  workout_title: string;
  trainer: string;
  state_name: string;
}

const ScheduleCard = ({
  id,
  start_date,
  workout_title,
  trainer,
  state_name,
}: SchedulesSectionProps) => {
  const [canselSchedule] = useCancelScheduleMutation();
  return (
    <div
      className="schedule-card"
      key={id}
      style={{
        backgroundColor: state_name !== "Активно" ? "lightcoral" : "#d8b0e8",
      }}
    >
      <div className="header">
        <div className="workout-type">{workout_title}</div>
        <div className="workout-date">{start_date}</div>
      </div>
      <div className="footer">
        <div className="workout-trainer">
          <b>Тренер:</b> {trainer}
        </div>
        <div>
          {state_name === "Активно" ? (
            <Button
              label="Отменить"
              severity="danger"
              size="small"
              onClick={() => {
                canselSchedule({
                  id: id,
                  state_id: 2,
                })
                  .unwrap()
                  .then()
                  .catch((error) => console.log(error));
              }}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;

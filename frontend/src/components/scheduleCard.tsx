// Import PrimeReact Components
import { Button } from "primereact/button";

interface SchedulesSectionProps {
  id: number;
  start_date: string;
  workout_title: string;
  trainer: string;
  state_name: string;
}

const scheduleCard = ({
  id,
  start_date,
  workout_title,
  trainer,
  state_name,
}: SchedulesSectionProps) => {
  return (
    <div className="schedule-card" key={id}>
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
            <Button label="Отменить" severity="danger" size="small" />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default scheduleCard;

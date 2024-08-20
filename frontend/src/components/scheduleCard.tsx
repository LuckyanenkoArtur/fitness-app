// Import PrimeReact Components
import { Button } from "primereact/button";

const scheduleCard = () => {
  return (
    <div className="schedule-card">
      <div className="header">
        <div className="workout-type">Фитнес</div>
        <div className="workout-date">24.08.2024 15:30</div>
      </div>
      <div className="footer">
        <div className="workout-trainer">
          <b>Тренер:</b> Cаенко Юлия
        </div>
        <div>
          <Button label="Отменить" severity="danger" size="small" />
        </div>
      </div>
    </div>
  );
};

export default scheduleCard;

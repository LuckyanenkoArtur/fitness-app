// Import React Functionality

// Import Custom components
import ScheduleCard from "./scheduleCard";

// Scss styling
import "./SchedulesSection.scss";

const SchedulesSection = () => {
  return (
    <div className="schedules">
      <div className="title">Расписание тренеровок</div>
      <div className="schedule-display-cards">
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
        <ScheduleCard />
      </div>
    </div>
  );
};

export default SchedulesSection;

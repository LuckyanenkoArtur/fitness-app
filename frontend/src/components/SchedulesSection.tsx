// Import React Functionality

import { useGetSchedulesQuery } from "../api/redux/features/schedules/schedulesApiSlice";

// Import Custom components
import ScheduleCard from "./scheduleCard";

interface SchedulesSectionProps {
  id: number;
  start_date: string;
  workout_title: string;
  trainer: string;
  state_name: string;
}

// Scss styling
import "./SchedulesSection.scss";

const SchedulesSection = ({ selectedState }) => {
  const { data, isLoading, error } = useGetSchedulesQuery(
    selectedState?.name || "Все"
  );

  if (error) console.log(error);

  return (
    <div className="schedules">
      <div className="title">Расписание тренеровок</div>
      <div className="schedule-display-cards">
        {data?.data ? (
          data?.data?.length === 0 ? (
            <p>Нет записей 👦</p>
          ) : (
            data?.data?.map((schedule: SchedulesSectionProps) => (
              <ScheduleCard
                id={schedule.id}
                start_date={schedule.start_date}
                trainer={schedule.trainer}
                workout_title={schedule.trainer}
                key={schedule.id}
                state_name={schedule.state_name}
              />
            ))
          )
        ) : (
          "Загрузка..."
        )}
      </div>
    </div>
  );
};

export default SchedulesSection;

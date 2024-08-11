// Import SCSS sttyles
import "./ProgramCard.scss";

type ProgramCardProps = {
  title: string;
  description: string;
  key: number;
};

const ProgramCard = ({ title, description, key }: ProgramCardProps) => {
  return (
    <div className="program-card" key={key}>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};

export default ProgramCard;

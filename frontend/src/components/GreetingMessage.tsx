import formatDate from "../helpers/dateFormatters";
import "./GreetingMessage.scss";

type GreetingMessageProps = {
  name: string;
};

const GreetingMessage = ({ name }: GreetingMessageProps) => {
  const date: string = formatDate();

  return (
    <div className="gretting-message">
      Привет, <span className="name">{name}</span> 🏋️‍♀️
      <br />
      Cегодня, <span className="date">{date}</span>
    </div>
  );
};

export default GreetingMessage;

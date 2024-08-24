import formatDate from "../helpers/dateFormatters";
import "./GreetingMessage.scss";
import { useState, useEffect } from "react"; // Import useState and useEffect

type GreetingMessageProps = {
  name: string;
};

const GreetingMessage = ({ name }: GreetingMessageProps) => {
  const [date, setDate] = useState(formatDate()); // Use useState for date

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(formatDate()); // Update date every 60 seconds
    }, 1000); // 60000 milliseconds = 60 seconds

    // Cleanup function to clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div className="gretting-message">
      Привет, <span className="name">{name}</span> 🏋️‍♀️
      <br />
      Cегодня, <span className="date">{date}</span>
    </div>
  );
};

export default GreetingMessage;

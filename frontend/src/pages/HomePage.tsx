// Import React Functionality
import { useState } from "react";

// Import Custom components
import GreetingMessage from "../components/GreetingMessage";
import MotivationPhrase from "../components/MotivationPhrase";
import WorkoutSelection from "../components/WorkoutSelection";
import SchedulesSection from "../components/SchedulesSection";
import HomePageHeader from "../components/homePageHeader";

// Scss styling
import "./HomePage.scss";

const HomePage = () => {
  const [name, setName] = useState("Артур");
  return (
    <div className="main-window">
      <HomePageHeader />
      <main>
        <section className="colmn" id="one">
          <GreetingMessage name={name} />
          <SchedulesSection />
        </section>
        <section className="colmn" id="two">
          <MotivationPhrase />
          <WorkoutSelection />
        </section>
      </main>
    </div>
  );
};

export default HomePage;

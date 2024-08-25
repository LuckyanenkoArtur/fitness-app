import { useState } from "react";

// Import Custom components
import GreetingMessage from "../components/GreetingMessage";
import MotivationPhrase from "../components/MotivationPhrase";
import WorkoutSelection from "../components/WorkoutSelection";
import SchedulesSection from "../components/SchedulesSection";
import HomePageHeader from "../components/homePageHeader";

import { useGetUserQuery } from "../api/redux/features/user/userApiSlice";

// Scss styling
import "./HomePage.scss";

const HomePage = () => {
  const { data, isLoading, error } = useGetUserQuery();
  const [selectedState, setSelectedState] = useState(null);

  if (error) console.log(error);

  return (
    <div className="main-window">
      <HomePageHeader
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />
      <main>
        <section className="colmn" id="one">
          <GreetingMessage name={data?.data?.[0]?.firstname || ""} />
          <SchedulesSection selectedState={selectedState} />
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

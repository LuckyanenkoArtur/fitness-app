// Import React Functionality
import { useState } from "react";

// Import PrimeReact Components
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

// Import Data
import states from "../data/stateWorkout";

// Import Styles
import "./homePageHeader.scss";

const HomePageHeader = () => {
  const [selectedState, setSelectedState] = useState(null);

  return (
    <header className="page-header">
      <div className="logo">💪FitToday</div>
      <div>
        <Dropdown
          value={selectedState}
          onChange={(e) => setSelectedState(e.value)}
          options={states}
          optionLabel="name"
          editable
          placeholder="Состояние ваших тренеровок"
        />
      </div>
      <div className="exit-button-container">
        <Button label="Выход" className="exit-button" size="small" />
      </div>
    </header>
  );
};

export default HomePageHeader;

// Import React Functionality
import { useState } from "react";

// Import PrimeReact Components
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

// Import Redux Functionality
import { logOut } from "../api/redux/features/auth/authSlice";
import { useLogoutMutation } from "../api/redux/features/auth/authApiSlice";
import { useDispatch } from "react-redux";

// Import Data
import states from "../data/stateWorkout";

// Import Styles
import "./homePageHeader.scss";

const HomePageHeader = ({ selectedState, setSelectedState }) => {
  const dispatch = useDispatch();
  const [sendLogoutData] = useLogoutMutation();
  const onClickExitHandler = () => {
    sendLogoutData({})
      .unwrap()
      .then(() => {
        dispatch(logOut());
      });
  };

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
        <Button
          label="Выход"
          className="exit-button"
          size="small"
          onClick={onClickExitHandler}
        />
      </div>
    </header>
  );
};

export default HomePageHeader;

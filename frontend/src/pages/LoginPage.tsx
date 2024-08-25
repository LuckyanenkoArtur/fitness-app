// Import React Functionality
import { useState } from "react";

// Import PrimeReact Components
import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

// Import Custome Components
import ProgramCard from "../components/ProgramCard";
import carouselTrainerCardTemplate from "../components/carauselTrainerCardTemplate";
import LoginDialog from "../components/dialogs/LoginDialog";
import RegisterDialog from "../components/dialogs/RegisterDialog";

// Import static data
import trainers from "../data/trainers";
import options from "../data/responsiveCarouselOptions";
import data from "../data/programs";

// Scss styling
import "./LoginPage.scss";

const LoginPage = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);

  return (
    <div>
      <header className="login-page-header">
        <div className="logo">💪FitToday</div>
        <div className="auth-buttons">
          <Button
            label="Вход"
            id="login"
            onClick={() => setVisibleLogin(true)}
          />
          <LoginDialog setVisible={setVisibleLogin} visible={visibleLogin} />
          <Button
            label="Регистрация"
            id="regist"
            onClick={() => setVisibleRegister(true)}
          />
          <RegisterDialog
            setVisible={setVisibleRegister}
            visible={visibleRegister}
          />
        </div>
      </header>
      <div className="main">
        <div className="brief-title">
          Получите Идеальную <span>Тренировку</span>
          <br />С Идеальными <span>Тренерами!</span>
        </div>
        <div className="carousel-box">
          <Carousel
            value={trainers}
            numVisible={3}
            numScroll={3}
            responsiveOptions={options}
            circular
            autoplayInterval={3000}
            itemTemplate={carouselTrainerCardTemplate}
          />
        </div>
        <div className="programs-preview">
          <div className="programs-title">
            Программы тренировок, которые мы предлагаем для вас
          </div>
          {data.map(
            (card: { id: number; title: string; description: string }) => {
              return (
                <ProgramCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

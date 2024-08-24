// Import React Functionality
import { useState } from "react";

// Import PrimeReact Components
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

// Import Scss styles
import "./RegisterDialog.scss";

type LoginDialogProps = {
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const LoginDialog = ({ visible, setVisible }: LoginDialogProps) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [surename, setSurename] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Dialog
      header="Регистрация"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <div className="dialog-window">
        <div className="input-form">
          <div className="lable">Фамилия:</div>
          <div className="input-field">
            <InputText
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <div className="input-form">
          <div className="lable">Имя:</div>
          <div className="input-field">
            <InputText
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
        </div>
        <div className="input-form">
          <div className="lable">Отчество:</div>
          <div className="input-field">
            <InputText
              value={surename}
              onChange={(e) => setSurename(e.target.value)}
            />
          </div>
        </div>
        <div className="input-form">
          <div className="lable">Имя пользователя:</div>
          <div className="input-field">
            <InputText
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="input-form">
          <div className="lable">Пароль:</div>
          <div className="input-field">
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              toggleMask
              feedback={false}
            />
          </div>
        </div>
        <Button label="На тренеровку" className="dialog-button" />
      </div>
    </Dialog>
  );
};

export default LoginDialog;

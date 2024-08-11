// Import React Functionality
import { useState } from "react";

// Import PrimeReact Components
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";

type LoginDialogProps = {
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const LoginDialog = ({ visible, setVisible }: LoginDialogProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Dialog
      header="Вход"
      visible={visible}
      style={{ width: "50vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <div>
        <div className="input-form">
          <div className="lable">Логин:</div>
          <div className="input-field">
            <InputText
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
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
        </div>
        <Button label="На тренеровку" />
      </div>
    </Dialog>
  );
};

export default LoginDialog;

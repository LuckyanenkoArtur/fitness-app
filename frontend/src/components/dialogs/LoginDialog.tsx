// Import React Functionality
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Import PrimeReact Components
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

import { useLoginMutation } from "../../api/redux/features/auth/authApiSlice";
import { setCredentials } from "../../api/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

// Import Scss styles
import "./LoginDialog.scss";

type LoginDialogProps = {
  visible: boolean;
  setVisible: (state: boolean) => void;
};

const LoginDialog = ({ visible, setVisible }: LoginDialogProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [Login] = useLoginMutation();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const toastError = useRef(null);

  return (
    <>
      <Toast ref={toastError} />
      <Dialog
        header="Вход"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => {
          if (!visible) return;
          setVisible(false);
        }}
      >
        <div className="dialog-window">
          <div className="input-form">
            <div className="lable">Логин:</div>
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
          <Button
            label="На тренеровку"
            className="dialog-button"
            onClick={() => {
              Login({
                username: username,
                password: password,
              })
                .unwrap()
                .then((data) => {
                  dispath(setCredentials({ token: data.acessToken }));
                  navigate("/");
                })
                .catch((err) => {
                  toastError.current.show({
                    severity: "error",
                    summary: "Ошибка при входе",
                    detail: `${err.data.message}`,
                  });
                });
            }}
          />
        </div>
      </Dialog>
    </>
  );
};

export default LoginDialog;

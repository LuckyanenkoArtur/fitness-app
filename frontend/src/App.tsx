import "./App.scss";
import { Router } from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./api/redux/store";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;

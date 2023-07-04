import Axios from "./API/Axios";
import Fatch from "./API/Fatch";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CRUDform from "./Form/CRUDform";
import FormBase from "./Form/FormBase";
import LoginPage from "./log-in/LoginPage";
import RegistrationPage from "./log-in/RegistrationPage";
import Auth from "./log-in/Auth";
import Homepage from "./log-in/Homepage";
import ShowData from "./CRUD/ShowData";
import { Provider } from "react-redux";
import COUNTER from "./REDUX/Counter";
import Store from "./REDUX/Store";
import Counter from "./REDUXTOOL/Counter";
import store from "./REDUXTOOL/Store";
import STORETHUNK from "./REDUXTHUNK/Store";
import COUNTERTHUNK from "./REDUXTHUNK/Counter";
import Counter1 from "./REDUX/Counter";
import STORE from "./REDUX/Store";
import Counter2 from "./REDUXTOOL/Counter";
import STORE1 from "./REDUXTOOL/Store";

function App() {
  return (
    <>
      {/* ===========================[API]====================================================== */}
      <Axios />
      {/* <Fatch /> */}
      {/* ===========================[Form]====================================================== */}
      {/* <FormBase /> */}
      {/* <CRUDform /> */}
      {/* ===========================[Login/registration]========================================= */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route
            path="/home"
            element={
              <Auth>
                <Homepage />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter> */}
      {/* ===========================[API CRUD]============================================== */}
      {/* <ShowData /> */}

      {/* ===========================[REDUX]============================================== */}
      {/* <Provider store={Store}>
        <COUNTER />
      </Provider> */}

      {/* <Provider store={STORE}>
        <Counter1 />//self
      </Provider> */}

      {/* ===========================[REDUX-TOOLKIT]============================================== */}
      {/* <Provider store={store}>
        <Counter />
      </Provider> */}

      {/* ===========================[REDUX-THUNK]============================================== */}
      {/* <Provider store={STORETHUNK}>
        <COUNTERTHUNK />
      </Provider> */}
    </>
  );
}

export default App;

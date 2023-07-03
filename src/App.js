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

function App() {
  return (
    <>
      {/* ===========================[API]====================================================== */}
      {/* <Axios /> */}
      {/* <Fatch /> */}
      {/* ===========================[Form]====================================================== */}
      {/* <FormBase /> */}
      {/* <CRUDform /> */}
      {/* ===========================[Login/registration]========================================= */}
      <BrowserRouter>
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
      </BrowserRouter>
      {/* ===========================[API CRUD]============================================== */}
      {/* <ShowData /> */}
    </>
  );
}

export default App;

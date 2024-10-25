import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import DeskPage from "../../pages/DeskPage/DeskPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/desk" element={<DeskPage />} />
        </Routes>
    )
}

export default AppRouting;
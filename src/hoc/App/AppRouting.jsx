import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import DeskPage from "../../pages/DeskPage/DeskPage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import PrivateRoute from "../private/privateRoute.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/" element={<PrivateRoute />}>
                <Route path="/desk" element={<DeskPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    )
}

export default AppRouting;
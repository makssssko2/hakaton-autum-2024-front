import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import PrivateRoute from "../private/privateRoute.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path="/" element={<PrivateRoute />}>
                <Route path="" element={<MainPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
    )
}

export default AppRouting;
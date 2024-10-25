import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MainPage/HomePage.jsx";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path="" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRouting;
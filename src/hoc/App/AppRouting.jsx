import {Route, Routes} from "react-router-dom";
import MainPage from "../../pages/MqinPage/HomePage.jsx";

const AppRouting = () => {
    return (
        <Routes>
            <Route path="" element={<MainPage />} />
        </Routes>
    )
}

export default AppRouting;
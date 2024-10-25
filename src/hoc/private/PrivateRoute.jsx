import { useEffect } from "react";
import AuthStore from "../../store/AuthStore.js";
import { Outlet, useNavigate } from "react-router-dom";
const PrivateRoute = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if(!AuthStore.isAuth) navigate('/login');
    }, []);

    return(
        <Outlet />
    );
}
export default PrivateRoute;
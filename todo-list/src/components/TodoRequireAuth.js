import { Outlet, Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ToodRequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.email
            ? <Outlet/>
            : <Navigate to="./components/TodoLogin" state={{ from: location }} replace />
    );
}

export default ToodRequireAuth;
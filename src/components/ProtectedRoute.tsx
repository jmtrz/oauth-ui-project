
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth";
import { PropsWithChildren, useEffect } from "react";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children } : ProtectedRouteProps) => {

    const user = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(user === null) {
            navigate('/login', { replace : true });
        }
    }, [navigate, user])

    return children;
}

export default ProtectedRoute

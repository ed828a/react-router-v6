import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

const RequireAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ path: location.pathname }} />; 
        // state property makes sure once logged in, it returns current path
    }
    return children;
};

export default RequireAuth;

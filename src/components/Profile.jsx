import React from "react";
import { useAuth } from "./AuthContextProvider";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/");
    };
    
    return (
        <div>
            <p>Welcome {auth.user}</p>
            <button onClick={handleLogout}>Log out</button>
        </div>
    );
};

export default Profile;

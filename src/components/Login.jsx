import React, { useState } from "react";
import { useAuth } from "./AuthContextProvider";
import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const [user, setUser] = useState("");
    const auth = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || "/"

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, {replace: ture} ) // this make sure login page won't show once logged in
        // with location.state set, this make sure it return to the state path
    };
    
    return (
        <div>
            <label>
                Username:{" "}
                <input
                    type="text"
                    name=""
                    id=""
                    onChange={(e) => setUser(e.target.value)}
                />
            </label>
            <button onClick={ handleLogin }>Login</button>
        </div>
    );
};

export default Login;

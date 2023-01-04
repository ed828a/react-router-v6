import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthContextProvider";

const Navbar = () => {
    const navLinkStyles = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "underline" : "none",
    });

    const auth = useAuth()

    return (
        <nav className="primary-nav">
            <NavLink
                to="/"
                style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: isActive ? "underline" : "none",
                })}
            >
                Home
            </NavLink>
            <NavLink to="/about" style={navLinkStyles}>
                About
            </NavLink>
            <NavLink to="/products" style={navLinkStyles} >Products</NavLink>
            <NavLink to='users' style={navLinkStyles} > Users </NavLink>
            <NavLink to='profile' style={navLinkStyles} > Profile </NavLink>
            {
                !auth.user && (<NavLink to="/login">Login</NavLink> ) 
            }
        </nav>
    );
};

export default Navbar;

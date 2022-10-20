import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="main_container">
            <nav className="navBar">
                <Link to="/"> Home</Link>
                <Link to="/activities"> Activities</Link>
                <Link to="/routines"> Routines</Link>
                <Link to="/my_routines"> My Routines</Link>
                <Link to="login"> Login</Link>
                <Link to="register"> Register</Link>
               
            </nav>
        </header>
    )
}


export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

    
const Navbar = ({ logout, token }) => {
    return (
      <header>
        <nav>
        <Link style={{ textDecoration: 'none' }} to="/"> Home</Link>
        <Link style={{ textDecoration: 'none' }} to="/activities"> Activities</Link>
        <Link style={{ textDecoration: 'none' }} to="/routines"> Routines</Link>
  
          
  
          {token ? (
            <>
              
              <Link style={{ textDecoration: 'none' }} to="/my_routines"> My Routines</Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => logout()}
              >
                <Button
                  style={{
                   
                    borderColor: "black",
                    
                  }}
                  variant="outlined"
                >
                  Logout
                </Button>
              </Link>
            </>
            ) : (
              <>
              <Link style={{ textDecoration: 'none' }} to='/register'>Register</Link>
                <Link style={{ textDecoration: 'none' }} to="/login"> Login</Link>
                </>
          )}
        </nav>
      </header>
  );
};

export default Navbar;

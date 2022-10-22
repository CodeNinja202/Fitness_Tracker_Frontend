import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

    
const Navbar = ({ logout, token }) => {
    return (
      <header>
        <nav>
        <Link to="/"> Home</Link>
        <Link to="/activities"> Activities</Link>
        <Link to="/routines"> Routines</Link>
  
          
  
          {token ? (
            <>
              
              <Link to="/my_routines"> My Routines</Link>
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
                <Link to="/login"> Login</Link>
          )}
        </nav>
      </header>
  );
};

export default Navbar;

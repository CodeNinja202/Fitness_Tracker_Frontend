import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = ({ logout, token }) => {
  return (
    <header>
      
      <nav className="Navbar">
      <Link style={{ textDecoration: "none"  }} to="/">
        <Button style={{
           color: "white",
        }}>
          
            Home
          
        </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/activities">
        <Button style={{
           color: "white",
        }}>
          
            Activities
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/routines">
        <Button style={{
           color: "white",
        }}>
          
            Routines
            </Button>
          </Link>
        

        {token ? (
          <>
          <Link style={{ textDecoration: "none" }} to="/my_routines">
            <Button style={{
           color: "white",
        }}>
              
                My Routines
             
            </Button>
            </Link>
            <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => logout()}
              >
            <Button style={{ color: "white" }} >
             
                Logout
              
            </Button>
            </Link>
          </>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
          <Button style={{ color: "white" }}>
            
              Login
            
          </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

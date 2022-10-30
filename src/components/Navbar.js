import React from "react";
import { Link } from "react-router-dom";
import { Button,  } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
const Navbar = ({ logout, token }) => {
  return (
    <header>
      
      <nav className="Navbar" style={{ width: "100%"}}>
      <Link style={{ textDecoration: "none"  }} to="/">
        <Button style={{
           color: "white",
        }}>
          
           <HomeIcon />
          
        </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/activities">
        <Button style={{
           color: "white",
        }}>
          
           <FitnessCenterIcon/>
            </Button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/routines">
        <Button style={{
           color: "white",
        }}>
          
          <EventNoteIcon/>
            </Button>
          </Link>
        

        {token ? (
          <>
          <Link style={{ textDecoration: "none" }} to="/my_routines">
            <Button style={{
           color: "white",
        }}>
              
                <AddCircleOutlineIcon/>
             
            </Button>
            </Link>
            <Link
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => logout()}
              >
            <Button style={{ color: "white" }} >
             
           < LogoutIcon/> 
              
            </Button>
            </Link>
          </>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
          <Button style={{ color: "white" }}>
            
              <LoginIcon/>
            
          </Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

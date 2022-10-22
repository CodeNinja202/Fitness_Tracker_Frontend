import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

    
const Navbar = ({ logout, token }) => {
    return (
      <header>
        <nav className='Navbar'>
        <Button>
          <Link 
            style={{ textDecoration: 'none' }} to="/">
              Home
          </Link>
        </Button>
        <Button>
          <Link 
            style={{ textDecoration: 'none' }} to="/activities">
              Activities
          </Link>
        </Button>
        <Button>
          <Link 
            style={{ textDecoration: 'none' }} to="/routines">
              Routines
          </Link>
        </Button>
  
          {token ? (
            <>
              <Button>
                <Link 
                  style={{ textDecoration: 'none'}}
                  to="/my_routines">
                    My Routines
                </Link>
              </Button>
              <Button 
                style={{ borderColor: "black"}}
                variant="outlined">
                <Link 
                  style={{ textDecoration: "none" }}
                  to="/" onClick={() => logout()}>
                    Logout
                </Link>
              </Button>
            </>
            ) : (
              <Button>
                <Link 
                  style={{textDecoration: 'none' }}
                  to="/login"> 
                    Login
                </Link>
              </Button>
          )}
        </nav>
      </header>
  );
};

export default Navbar;

import React  from "react";
import { Link } from 'react-router-dom';
import { Button} from "@mui/material";
const Home = () => {
    
    return (
        <div>
        <h1>HOME</h1>
        <Link style={{ textDecoration: 'none' }} to='/register'>
        <Button
           style={{
            borderColor: "black",
            height: "3rem",
            margin: ".25rem",
          }}
          variant='contained'
          type='submit'>
          Don't have an account? Sign Up
        </Button>
      </Link>
        </div>
    )
}


export default Home;
import React, { useState } from "react";
 import { loginUser } from "../api";

import { Button, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import './Register';
const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    console.log(results);
    if (results.token) {
      setToken(results.token);
      window.localStorage.setItem('token', results.token);
      navigate('/');
    } else {
      alert("Incorrect Password")
      console.log('error occured', results);
    }
  };
  
    return (
      <form
        className="main-div-login"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <TextField
          
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
  
        <TextField
         
        
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          style={{
            borderColor: "black",
            height: "3rem",
            margin: ".25rem",
          }}
          variant="contained"
          type="submit"
        >
          Login 
        </Button>

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
      </form>
    );
  };


export default Login;
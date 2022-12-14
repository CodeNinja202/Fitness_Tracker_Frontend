import React, { useState } from "react";
import { registerUser } from "../api";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import log_reg_PIC from "./images/logo_pic.jpg";
const Register = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    if (password.search(/[A-Z]/) === -1) {
      alert("Need UpperCase");
      return null;
    }
    if(password.length < 8){
      alert("Password to short")
      return null;
    }
    if (password !== confirmPassword) {
      console.log("bad password")
      alert("Password Does Not Match");
      return null;
    }

    const results = await registerUser(username, password);
    console.log("REGISTER JS", results);
    if (results.token) {
      console.log("Token Successful");
      setToken(results.token);
      window.localStorage.setItem("token", results.token);
      navigate("/");
    } else {
      alert("Username Already Exsist");
      console.log(results.error.message);
    }
  };

  return (
    <form
     
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
    >
        <div className="loginTemplate">
      <img style={{
            borderRadius:"10%",
            width:"100%"
          }} src={log_reg_PIC } />
      
     
      
      <TextField
       type="text"
       style={{marginTop:"9%", margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
       
        required
        title="8 character minimum"
        
        label="Username"
        onChange={(event) => setUsername(event.target.value)}
      />

      <TextField
       type="password"
       style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
        
        required
        title="8 character minimum"
        label="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
      type="password"
      style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
       
        required
        title="8 character minimum"
        label="Confirm Password"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <Button
        style={{
          background: "red",
          width:"12rem",
          borderColor: "black",
          height: "3rem",
          margin: ".25rem",
          width:"100%" ,
        }}
        variant="contained"
        type="submit"
      >
        Sign Up
      </Button>
      </div>
    </form>
  );
};

export default Register;
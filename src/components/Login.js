import React, { useState } from "react";
import { loginUser } from "../api";
import log_reg_PIC from "./images/logo_pic.jpg";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "./Register";
const Login = ({ setToken, navigate }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    console.log(results);
    if (results.token) {
      setToken(results.token);
      window.localStorage.setItem("token", results.token);
      navigate("/");
    } else {
      alert("Incorrect Username/Password");
      console.log("error occured", results);
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
        <img
          style={{
            borderRadius:"10%",
            
          }}
          src={log_reg_PIC}
        />

        <TextField
 type="text"
          style={{ margin: ".25rem" }}
          label="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        />

        <TextField
        
        type="password"
          style={{ margin: ".25rem" }}
          label="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button
          style={{
            background: "red",
            width:"12rem",
            borderColor: "black",
            height: "3rem",
            margin: ".25rem",
          }}
          variant="contained"
          type="submit"
        >
          Login
        </Button>

        <Link style={{ textDecoration: "none" }} to="/register">
          <Button
            style={{
              background: "red",
              width:"12rem",
              borderColor: "black",
              height: "3rem",
              margin: ".25rem",
            }}
            variant="contained"
            type="submit"
          >
             Sign Up
          </Button>
        </Link>
      </div>
    </form>
  );
};

export default Login;

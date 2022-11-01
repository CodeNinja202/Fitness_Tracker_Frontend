import React, { useState } from "react";
import { createRoutine } from "../api";
import { TextField, Button, Link } from "@mui/material";
import logoIMG from "./images/create_routine.jpg";
const CreateRoutine = ({ token, navigate, fetchRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const newRoutine = {
    name,
    goal,
    isPublic: true,
  };

  async function addRoutine() {
    const result = await createRoutine(token, newRoutine);
    console.log("TESTING ROUTINE", result);
    fetchRoutines();
    navigate(`/my_routines`);
    location.reload();
  }

  return (
    <form
      id="create-routine"
      onSubmit={async (event) => {
        event.preventDefault();
      }}
    >
     
        <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
    <div className="create-routine">
      <TextField
        style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
        type="text"
        placeholder="Name*"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
        type="text"
        placeholder="Goal*"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
      />

      <Button variant="outlined" color="error" style={{color: "white",background: "red", width: "100%"}} onClick={() => addRoutine()}>Create New Routine</Button>
      </div>
    </form>
  );
};

export default CreateRoutine;
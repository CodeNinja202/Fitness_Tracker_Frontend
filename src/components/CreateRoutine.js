import React, { useState } from "react";
import { createRoutine } from '../api';
import { Paper, TextField, Button, Link } from "@mui/material";
import '../App'

const CreateRoutine = (token, navigate, fetchRoutines) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  const newRoutine = {
    name,
    goal,
  };

  async function addRoutine() {
    const result = await createRoutine(token, newRoutine);
    fetchRoutines();
    navigate(`/routines`);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addPost();
      }}
    >
      <TextField 
      type="text" 
      placeholder="Name*" 
      value={name}
       onChange={(event) => setName(event.target.value)} 
       />
      
      
      <TextField 
      type="text" 
      placeholder="Goal*" 
      value={goal}
      onChange={(event) => setGoal(event.target.value)}
      />

      <Button onClick={() => addRoutine()}>Create New Routine</Button>
    </form>
  );
};

export default CreateRoutine;
import React, { useState } from "react";
import { createActivity } from '../api';
import {  TextField, Button, } from "@mui/material";


const CreateActivity = ({token, navigate, fetchActivities}) => {
  const [name, setName] = useState("");
  const [description , setDescription ] = useState("");

  const newActivity = {
    name,
    description ,
  };

  async function addActivity() {
    const result = await createActivity(token, newActivity);
    fetchActivities();
    navigate(`/activities`);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addActivity();
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
      placeholder="Description*" 
      value={description }
      onChange={(event) => setDescription (event.target.value)}
      />

      <Button onClick={() => addActivity()}>Create New Activity</Button>
    </form>
  );
};

export default CreateActivity;
import React, { useState } from "react";
import { createRoutineActivity } from '../api';
import {  TextField, Button, } from "@mui/material";

const CreateRoutineActivity = (token,fetc) => {
    const [count, setCount] = useState("");
    const [duration , setDuration ] = useState("");
  
    const newRoutineActivity = {
      count,
      duration 
    };
    
    async function addRoutineActivity() {
      
      const result = await createRoutineActivity(token, newRoutineActivity);
     
      
      
      console.log("TESTING results", result)
      navigate(`/activities`);
    }
   
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addRoutineActivity();
        }}
      >
        <TextField 
        type="text" 
        placeholder="Count*" 
        value={count}
         onChange={(event) => setCount(event.target.value)} 
         />
        
        
        <TextField 
        type="text" 
        placeholder="Duration*" 
        value={duration }
        onChange={(event) => setDuration (event.target.value)}
        />
  
        <Button onClick={() => addActivity()}>Create New Activity</Button>
      </form>
    );
  };


export default CreateRoutineActivity;
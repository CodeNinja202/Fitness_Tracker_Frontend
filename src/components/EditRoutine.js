import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, TextField, Button, Link } from "@mui/material";
import { updateRoutine, deleteRoutine } from "../api";
const EditRoutine = ({token, routines, fetchRoutines, navigate}) => {
    const { routineId } = useParams();

     const [currentRoutine] = routines.filter((routine) => routine.id === routineId );
  console.log("testing routineID", routineId)
     const { name, goal, isPublic } = currentRoutine;
  
     const [newName, setNewName] = useState(name);
     const [newdGoal, setNewGoal] = useState(goal);
     const [newisPublic, setisPublic] = useState(isPublic);
 
  
    async function editRoutine() {
       const updatedRoutine = {
         name: newName,
        goal: newdGoal,
        isPublic: newisPublic,
        
      };
  
      await updateRoutine(updatedRoutine, routineId);
       fetchRoutines();
       navigate("/routines");
     }
  
    return (
      // This needs to be a form that accepts the 5 request parameters for creating a post
      <Paper elevation={5}>
        <h1>Edit</h1>
        <form
          class="form"
          onSubmit={(event) => {
            event.preventDefault();
             editRoutine();
  
            window.location - "/routines";
          }}
        >
          <div className="loginTemplate">
          
            <h1>Edit Routines</h1>
            <TextField
              type="text"
              placeholder={name}
              onChange={(event) => setNewName(event.target.value)}
            />
            <TextField
             
              type="text"
              placeholder={goal}
              onChange={(event) => setNewGoal(event.target.value)}
            />
            
            <input
              type="checkbox"
              placeholder={isPublic}
              onChange={(event) => setisPublic(event.target.value)}
            />
  
            <Button
              style={{
               
                background: "black",
               
                borderColor: "black",
              }}
              type="submit"
              variant="outlined"
            >
              Edit Post
            </Button>
            <Button
              style={{
              
              
                background: "black",
               
              }}
              type="submit"
              color="error"
              variant="outlined"
              onClick={() => {
                deleteRoutine(token, routineId);
              }}
            >
              Delete
            </Button>
          </div>
        </form>
      </Paper>
    );
  };

export default EditRoutine;
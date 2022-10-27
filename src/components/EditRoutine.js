import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, TextField, Button} from "@mui/material";
import { updateRoutine, deleteRoutine } from "../api";
const EditRoutine = ({user, token, routinesByUser, fetchUserRoutines}) => {
    const { routineId } = useParams();

     const [currentRoutine] = routinesByUser.filter((routine) => routine.id === routineId );
  console.log("testing currentRoutine", currentRoutine)
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
  
      const response = await updateRoutine(token, updatedRoutine)
     }
  
    return (

      <Paper elevation={5}>
        <h1>Edit</h1>
        <form
          class="form"
          onSubmit={(event) => {
            event.preventDefault();
             editRoutine();
             fetchUserRoutines();
             navigate('/my_routines')
            window.location - "/routines";
          }}
        >
         
          
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
          
        </form>
      </Paper>
    );
  };

export default EditRoutine;
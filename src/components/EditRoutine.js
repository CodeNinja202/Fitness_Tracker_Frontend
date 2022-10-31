import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, TextField, Button } from "@mui/material";
import { updateRoutine, deleteRoutine } from "../api";
import logoIMG from "./images/edit_routine.jpg";
const EditRoutine = ({
  token,
  routinesByUser,
  fetchUserRoutines,
  navigate,
}) => {
  if (routinesByUser.length === 0) {
    console.log("Return NULL");
    return null;
  }
  const { routineId } = useParams();
  console.log("Testing Routine by user", routinesByUser);
  const currentRoutine = routinesByUser?.filter((routine) => {
    console.log(routine);
    return routine.id === parseInt(routineId);
  });
  if (currentRoutine.length === 0) {
    return "routine not found by that ID";
  }
  const { name, goal, isPublic } = currentRoutine[0];
  const [newGoal, setNewGoal] = useState(goal);
  const [newName, setNewName] = useState(name);
  const [newisPublic, setisPublic] = useState(isPublic);
  console.log(newGoal);

  async function editRoutine() {
    const updatedRoutine = {
      name: newName,
      goal: newGoal,
      isPublic: newisPublic,
    };

    const response = await updateRoutine(token, updatedRoutine, routineId);
  }

  return (
    <div elevation={5}>
        <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          editRoutine();
          fetchUserRoutines();
          
          navigate("/my_routines");
          location.reload();
        }}
      >
       <div className="edit-routine-div">
        <TextField
          style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <TextField
          style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
          type="text"
          value={newGoal}
          onChange={(event) => setNewGoal(event.target.value)}
        />
<span>Is Public?<br></br></span>
        <input
          type="checkbox"
       
          onChange={(event) => setisPublic(event.target.value)}
        /><br></br>
        <Button
          style={{marginBottom:"2%",color: "white",background: "red", width: "100%"}}
          type="submit"
          variant="outlined"
        >
          Edit Routine
        </Button>
        <Button
         style={{color: "white",background: "red", width: "100%", }}
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
    </div>
  );
};

export default EditRoutine;

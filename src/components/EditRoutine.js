import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { Paper, TextField, Button } from "@mui/material";
import { updateRoutine, deleteRoutine } from "../api";
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
    <Paper elevation={5}>
      editRoutine
      <h1>Edit</h1>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          editRoutine();
          fetchUserRoutines();
          navigate("/my_routines");
        }}
      >
        <h1>Edit Routines</h1>
        <TextField
          type="text"
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        <TextField
          type="text"
          value={newGoal}
          onChange={(event) => setNewGoal(event.target.value)}
        />

        <input
          type="checkbox"
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
          Edit Routine
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
      </form>
    </Paper>
  );
};

export default EditRoutine;

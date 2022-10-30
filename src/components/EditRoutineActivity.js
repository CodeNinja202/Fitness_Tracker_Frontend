import { React, useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { updateRoutineActivity, deleteRoutineActivity } from "../api";
const EditRoutineActivity = ({
  token,
  routinesByUser,
  fetchUserRoutines,
  navigate,
}) => {
  // console.log("Testing routinesByUser line 10",routinesByUser)
  // console.log("Testing fetchUserRoutines line 11",fetchUserRoutines)
  // console.log("Testing token line 12",token)

  if (routinesByUser.length === 0) {
    console.log("Return NULL");
    return null;
  }
  // console.log("Testing null routinesByUser line 18",routinesByUser)

  const { routineActivityId, routineId } = useParams();

  // console.log("Testing null routineActivityId line 23",routineActivityId)
  // console.log("Testing Routine by user line 24",routinesByUser)
  const [currentRoutine] = routinesByUser?.filter((routine) => {
    // console.log("TESTING routineActivity ",routine);
    return routine.id === parseInt(routineId);
  });
  if (currentRoutine.length === 0) {
    return "routine activity not found by that ID";
  }

  const [currentActivity] = currentRoutine.activities.filter((activity) => {
    console.log(routineActivityId, activity.id);
    return activity.routineActivityId === parseInt(routineActivityId);
  });

  const { count, duration } = currentActivity;
  const [newCount, setNewCount] = useState(count);
  const [newDuration, setDuration] = useState(duration);

  async function EditRoutineActivity() {
    const updatedRoutineActivity = {
      count: newCount,
      duration: newDuration,
    };

    const response = await updateRoutineActivity(
      token,
      updatedRoutineActivity,
      routineActivityId
    );
  }

  return (
    <Paper elevation={5}>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          EditRoutineActivity();
          fetchUserRoutines();
          navigate("/my_routines");
        }}
      >
        <h1>Edit Routines Activity</h1>
        <TextField
          type="number"
          value={newCount}
          onChange={(event) => setNewCount(event.target.value)}
        />
        <TextField
          type="number"
          value={newDuration}
          onChange={(event) => setDuration(event.target.value)}
        />

        <Button
          style={{
            background: "black",

            borderColor: "black",
          }}
          type="submit"
          variant="outlined"
        >
          Edit Routine Activity
        </Button>
        <Button
          style={{
            background: "black",
          }}
          type="submit"
          color="error"
          variant="outlined"
          onClick={() => {
            deleteRoutineActivity(token, routineActivityId);
          }}
        >
          Delete
        </Button>
      </form>
    </Paper>
  );
};

export default EditRoutineActivity;

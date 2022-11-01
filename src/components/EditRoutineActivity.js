import { React, useState } from "react";
import { Paper, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { updateRoutineActivity, deleteRoutineActivity } from "../api";
import logoIMG from "./images/Edit_Routine_activities.jpg";
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
    <div elevation={5}>
       <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
      <form
        className="form"
        onSubmit={(event) => {
          event.preventDefault();
          EditRoutineActivity();
          fetchUserRoutines();
          navigate("/my_routines");
        }}
      >
        <div className="edit-routine-activity">
        <TextField
          style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
          type="number"
          value={newCount}
          onChange={(event) => setNewCount(event.target.value)}
        />
        <TextField
        style={{ margin: ".25rem",  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff" }}
          type="number"
          value={newDuration}
          onChange={(event) => setDuration(event.target.value)}
        />

        <Button
        style={{color: "white",background: "red", width: "100%",marginBottom:"2%" }}
          type="submit"
          variant="outlined"
        >
          Edit Routine Activity
        </Button>
        <Button
          style={{color: "white",background: "red", width: "100%", }}
          type="submit"
          color="error"
          variant="outlined"
          onClick={() => {
            deleteRoutineActivity(token, routineActivityId);
          }}
        >
          Delete
        </Button>
        </div>
      </form>
    </div>
  );
};

export default EditRoutineActivity;
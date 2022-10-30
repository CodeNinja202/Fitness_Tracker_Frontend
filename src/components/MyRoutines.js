import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import CreateRoutineActivity from "./CreateRoutineActivity";

const MyRoutines = ({
  activities,
  routinesByUser,
  setSearchResults,
  fetchActivities,
  token,
}) => {
  return (
    <div className="main-div-routinesByUser">
      <h1>My Routines</h1>

      <Link style={{ textDecoration: "none" }} to="/routines/create_routine">
        <Button> Create A Routine</Button>
      </Link>
      {routinesByUser?.map((userRoutine) => {
        const {
          creatorName,
          name,
          goal,
          id: routineId,
          activities: routinesActivities,
        } = userRoutine;

        return (
          <Paper key={routineId}>
            <p>
              <b>Created by:</b> {creatorName}
            </p>
            <p>
              <b>Workout routine:</b> {name}
            </p>
            <p>
              <b>Goal:</b> {goal}
            </p>

            <Link
              style={{ textDecoration: "none" }}
              to={`/routines/edit-routine/${routineId}`}
            >
              <Button> Edit Routine</Button>
            </Link>
            <br></br>
            <b>Choose Activities:</b>
            <CreateRoutineActivity
              token={token}
              activities={activities}
              fetchActivities={fetchActivities}
              setSearchResults={setSearchResults}
              routineId={routineId}
            />

            {routinesActivities.map((activity) => {
              const { routineActivityId, description, duration, count, id } =
                activity;
              return (
                <div key={id}>
                  <p>
                    <b>Description: </b>
                    {description}
                  </p>
                  <p>
                    <b>Duration: </b>
                    {duration}
                  </p>
                  <p>
                    <b>Count: </b>
                    {count}
                  </p>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/routine_activities/${routineActivityId}/${routineId}`}
                  >
                    <Button> Edit Routine Activity</Button>
                  </Link>
                  <br></br>
                  <b>Edit Routine Activity</b>
                </div>
              );
            })}
          </Paper>
        );
      })}
    </div>
  );
};

export default MyRoutines;

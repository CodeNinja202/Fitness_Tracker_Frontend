import React from "react";
import { Link } from "react-router-dom";
import { Button} from "@mui/material";
import CreateRoutineActivity from "./CreateRoutineActivity";
import logoIMG from "./images/my_routines.gif";
import EditIcon from '@mui/icons-material/Edit';
const MyRoutines = ({
  activities,
  routinesByUser,
  setSearchResults,
  fetchActivities,
  token,
}) => {
  return (
    
    
    <div className="main-div-routinesByUser">
        <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
      <Link style={{ textDecoration: "none" }} to="/routines/create_routine">
        <Button  variant="outlined" color="error" style={{ color: "white",background: "red", width:"100%"}}> Create A Routine</Button>
      </Link>

      <div className="routine-by-div">
      {routinesByUser?.map((userRoutine) => {
        const {
          creatorName,
          name,
          goal,
          id: routineId,
          activities: routinesActivities,
        } = userRoutine;

        return (
          <div  key={routineId} >
            <div className="routine-by-inner-div">
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
              <Button> <EditIcon/>Edit</Button>
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
              const { routineActivityId, description, duration, count, id, name } =
                activity;
              return (
                <div  style={{
                  padding:"2%",
                  borderRadius:"2%",
                  marginTop:"5%",
                  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff"
                }} key={id}>
                   <p>
                    <b>Name: </b>
                    {name}
                  </p>
                  
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
                    <Button> <EditIcon/>Edit</Button>
                  </Link>
               
                </div>
              );
            })}
            </div>
          </div>
        );
      })}
      </div>
    </div>
    
  );
};

export default MyRoutines;
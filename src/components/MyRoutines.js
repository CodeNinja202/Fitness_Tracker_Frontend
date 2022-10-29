import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper } from "@mui/material";
import Search from "./Search";

const MyRoutines = ({activities,routinesByUser, setSearchResults,fetchActivities, token} ) => {

    return (
      <div className="main-div-routinesByUser">
        <h1>My Routines</h1>
        
        <Link style={{ textDecoration: 'none' }} to="/routines/create_routine"><Button> Create A Routine</Button></Link>
        {routinesByUser?.map((userRoutine) => {
          const { creatorName, name, goal, id,activities: routinesActivities} = userRoutine;
    
          return (
  
            
            <Paper key={id}>
              <p>
                <b>Created by:</b> {creatorName}
              </p>
              <p>
                <b>Workout routine:</b> {name}
              </p>
              <p>
                <b>Goal:</b> {goal}
              </p>
              
             
              <Link style={{ textDecoration: 'none' }} to={`/routines/edit-routine/${id}`}><Button> Edit Routine</Button></Link><br></br>
              <b>Choose An Activities:</b>
                 <Search token={token} activities={activities} fetchActivities={fetchActivities} setSearchResults={setSearchResults} routineId={id}/>
                
  
             
              
              {routinesActivities.map((activity) => {
                const { description, duration, count, id } = activity;
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
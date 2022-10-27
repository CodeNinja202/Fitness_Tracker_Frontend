import React from "react";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
const Routines = ({ routines, token }) => {
  return (

    
    <div className="main-div-routines">
     
      {routines.map((routine) => {
        const { creatorName, name, goal, id, activities, creatorId } = routine;
      
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
            <p>
              <b>Activities:</b>

            </p>
            { token ? (
      <Link style={{ textDecoration: 'none' }} to="/routines/edit-routine/:routineId"> Edit Routine</Link>
     ) :(
      <button>View</button>
     )
     
     
     }
            {activities.map((activity) => {
              const { description, duration, count, id,  } = activity;
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

export default Routines;

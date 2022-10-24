import React from "react";
import { Paper } from "@mui/material";
const Routines = ({ routines, token }) => {
  return (
    <div className="main-div-routines">
      {routines.map((routine) => {
        const { creatorName, name, goal, id, activities} = routine;
  
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
            {token ? (
                    <button>You are the Author</button>
                  ) : (
                    <button>You are not the Author</button>
                  )}
            {activities.map((activity) => {
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

export default Routines;

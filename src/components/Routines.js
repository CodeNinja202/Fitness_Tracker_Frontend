import React from "react";
import { Paper } from "@mui/material";

const Routines = ({ routines }) => {
  return (
    <form>
    <div className="main-div-routines">
      {routines.map((routine) => {
        const { creatorName, name, goal, id, activities, creatorId } = routine;

        return (
          <Paper key={routine.id}>
            <div className="routines-inner-div" >
            <p>
              <b>Created by:</b> {routine.creatorName}
            </p>
            <p>
              <b>Workout routine:</b> {routine.name}
            </p>
            <p>
              <b>Goal:</b> {routine.goal}
            </p>
            <p>
              <b>Activities:</b>
            </p>
            </div>
            {activities.map((activity) => {
              const { description, duration, count, id } = activity;
              return (
                <div key={activity.id}>
                  
                  <p>
                    <b>Description: </b>
                    {activity.description}
                  </p>
                  <p>
                    <b>Duration: </b>
                    {activity.duration}
                  </p>
                  <p>
                    <b>Count: </b>
                    {activity.count}
                  </p>
                  </div>
                
              );
            })}
          </Paper>
        );
      })}
    </div>
    </form>
  );
 
};

export default Routines;
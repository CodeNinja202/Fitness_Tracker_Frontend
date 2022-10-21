import React, {Fragment} from "react";
import { Paper } from "@mui/material";
const Routines = ({ routines }) => {
  return (
    <div className="main-div-routines">
      {routines.map((routine) => { 
        const { creatorName, name, goal,id, activities} = routine;

        return (
          <Paper>
          <Fragment key={id}>
          
            <p><b>Created by:</b> {creatorName}</p>
            <p><b>Workout routine:</b> {name}</p>
            <p><b>Goal:</b> {goal}</p>
            <p><b>Activities:</b></p>{
              activities.map(activity => {
                const {description, duration, count, id} = activity;
               return (
                <Fragment key={id}>
                <p><b>Description: </b>{description}</p>
                <p><b>Duration: </b>{duration}</p>
                <p><b>Count: </b>{count}</p>
                </Fragment>
               )
               

              })
              }
          
          </Fragment>
          </Paper>
        );
        
      })}
    </div>
  );
};

export default Routines;

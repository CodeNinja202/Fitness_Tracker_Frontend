import React from "react";
import { Paper } from "@mui/material";
const Activities = ({ activities , token }) => {
  return (
    <div id="outer div element">
      {activities.map((activity) => {
        const { description, name, id } = activity;
        return (
          <Paper key={id}>
            <p>
              <b>Activities: </b>
              {name}
            </p>
            <p>
              <b>Description: </b>
              {description}
            </p>


         
</Paper>
        );
      })}
    </div>
  );
};

export default Activities;

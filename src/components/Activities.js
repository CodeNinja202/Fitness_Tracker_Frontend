import React from "react";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
const Activities = ({ activities , token }) => {
  return (
    <div id="outer-div-element">
          {token ? (
            <>
              <Link style={{ textDecoration: 'none' }} to="/activities/create_activity"><Button> Create An Activity</Button></Link>
            </>
            ): null }
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
            {token ? (
            <>
            <Button>
          <Link 
            style={{ textDecoration: 'none' }} to="/activities/edit/:activityId">
              Edit Activity
          </Link>
        </Button>
        </>
            ): null }
</Paper>
        );
      })}
    </div>
  );
};

export default Activities;

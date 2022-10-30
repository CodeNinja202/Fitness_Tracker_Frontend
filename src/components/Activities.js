import React from "react";
import { Paper, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMG from "./images/activities.gif";
const Activities = ({ activities, token }) => {
  return (
    <form>
<div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
        {token ? (
        <>
          <Link
            style={{ textDecoration: "none" }}
            to="/activities/create_activity"
          >
            <Button  variant="outlined" color="error" style={{ color: "white",background: "red", width:"100%"}}> Create An Activity</Button>
          </Link>
        </>
      ) : null}
    <div id="outer-div-element" className="activities-main-div">
    
      {activities.map((activity) => {
        const { description, name, id } = activity;

        return (
          
          <div key={activity.id}  >
            <div className="activities-inner-div" >
            <p>
              <b>Activities: </b>
              {activity.name}
              
            </p>
           
            <p>
              <b>Description: </b>
              {activity.description}
            </p>

            </div>
          </div>
          
        );
      })}
    </div>
    </form>
  );
 
};

export default Activities;

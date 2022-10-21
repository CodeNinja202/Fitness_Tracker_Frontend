import React, {Fragment} from "react";
import { Paper } from "@mui/material";
const Activities = ({activities}) => {
    return (
        
        <div id='outer div element'>
        {
          activities.map((activity) => {
            const {description, name , id } = activity;
            return (
                <Paper>
              <Fragment key={id}>
                <h3>{name}</h3>
                <p>Description: {description}</p>
                
               
              </Fragment>
              </Paper>
            )
          })
        }
      </div>
    
      )
    }


export default Activities;
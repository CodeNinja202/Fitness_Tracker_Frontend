import React,{useState} from "react";
import { Button} from "@mui/material";
import logoIMG from "./images/routine.gif";
const Routines = ({ routines }) => {
  return (
    <form>
         <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
    <div className="main-div-routines">
      {routines.map((routine) => {
        const { creatorName, name, goal, id, activities, creatorId } = routine;
        const [ display, setDisplay] = useState("none")
        return (
          <div key={routine.id}>
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
           
            <Button  style={{marginBottom:"2%",color: "white",background: "red", width: "100%"}} onClick={(event)=>{
              event.preventDefault()
              if(display === "none"){
                setDisplay('block')
              }else{
                setDisplay('none')
              }
            
            }
            }>Show Activities</Button>
            </div>
            <div className="activity-box" style={{display:display}}>

            {activities.map((activity) => {
              
              const { description, duration, count, id } = activity;
              return (
                <div style={{
                  padding:"2%",
                  borderRadius:"2%",
                  marginTop:"5%", margin: "2%",
                  width:"100%", boxShadow:"inset 8px 8px 8px #cbced1, inset 8px 8px 8px #fff"
                }} key={activity.id}>
                  
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
            </div>
          </div>
        );
      })}
    </div>
    </form>
  );
 
};

export default Routines;
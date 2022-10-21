import React, {Fragment} from "react";

const Routines = ({ routines }) => {
  return (
    <div className="main-div-routines">
      {routines.map((routine) => { 
        const { creatorName, name, goal,id, activities} = routine;

        return (
          <Fragment key={id}>
            
            <p><b>Created by:</b> {creatorName}</p>
            <p><b>Workout routine:</b> {name}</p>
            <p><b>Goal:</b> {goal}</p>
            <p>Activities:{
              activities.map(activity => {
                const {description} = activity;
               return (
                <Fragment key={id}>
                <p>Description:{description}</p>
                
                
                </Fragment>
               )


              })
              }
            </p>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Routines;

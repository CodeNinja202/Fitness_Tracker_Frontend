import React from "react";

const Routines = ({ routines }) => {
  return (
    <div className="main-div-routines">
      {routines.map((routine) => {
        const { creatorName, name, goal } = routine;

        return (
          <>
            <p><b>Created by:</b> {creatorName}</p>
            <p><b>Workout routine:</b> {name}</p>
            <p><b>Goal:</b> {goal}</p>
           
          </>
        );
      })}
    </div>
  );
};

export default Routines;

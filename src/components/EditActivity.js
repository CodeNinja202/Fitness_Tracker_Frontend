import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateActivity } from '../api';

const EditActivity = ({ activities, fetchActivities, navigate, token}) => {
  
  const { activityID} = useParams();
if(activities.length) {
    const currentActivity = activities?.filter((activity) => activity.id === activityID*1);

  //  console.log("TESTING ACTIVITIES",activities)
    const  {name, description}  = currentActivity;
//console.log("Current Actitivity", currentActivity)
    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);


    async function editAnActivity() {
      const updatedActivity = {
        name: newName,
        description: newDescription,
        id: activityID
      }
      ////console.log("something",token)
      await updateActivity(updatedActivity,token)
      navigate('/activities')
      fetchActivities()
    }

    return (

      <div className="edit-main-div" >
        <form onSubmit={(event) => {
          event.preventDefault();
          editAnActivity();


        }}>
          <h1>Edit Activity</h1>

          <input
            type='text'
            placeholder={name}
            onChange={(event) => setNewName(event.target.value)}
          />
          <input 
            type='text'
            placeholder={description}
            onChange={(event) => setNewDescription(event.target.value)}
          />

          <button 
            type="submit"
            variant="outlined"
            onClick={() => {
              editAnActivity();
            }}>Edit Activity</button>
        </form>
      </div>
    )
  }
  
}

export default EditActivity;
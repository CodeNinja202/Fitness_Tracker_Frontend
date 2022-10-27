import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateActivity } from '../api';

const EditActivity = ({ activities, fetchActivities, navigate, token}) => {
  const { creatorId } = useParams();
 {
    const currentActivity = activities.filter((activity) => activity.id === creatorId);

    console.log(activities)
    const  {name, description}  = currentActivity;
console.log("Current Actitivity", currentActivity)
    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);


    async function editAnActivity() {
      const updatedActivity = {
        name: newName,
        description: newDescription,
        id: creatorId
      }
      console.log("something",token)
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
  return <h1>Activities Loading</h1>
}

export default EditActivity;
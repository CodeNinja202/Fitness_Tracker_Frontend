import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { updateActivity } from "../api";

const EditActivity = ({ activities, fetchActivities, navigate, token }) => {
  if (activities.length === 0) {
    console.log("Return NULL");
    return null;
  }

  const { activityID } = useParams();
  //  console.log("TESTING ACTIVITIES",activities)
  const currentActivity = activities?.filter((activity) => {
    return (activity.id = parseInt(activityId));
  });
  if (currentActivity.length === 0) {
    return "routine not found by that ID";
  }
  //console.log("Current Actitivity", currentActivity)
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  async function editAnActivity() {
    const updatedActivity = {
      name: newName,
      description: newDescription,
      id: activityID,
    };
    ////console.log("something",token)
    await updateActivity(updatedActivity, token);
    navigate("/activities");
    fetchActivities();
  }

  return (
    <div className="edit-main-div">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          editAnActivity();
        }}
      >
        <h1>Edit Activity</h1>

        <input
          type="text"
          placeholder={name}
          onChange={(event) => setNewName(event.target.value)}
        />
        <input
          type="text"
          placeholder={description}
          onChange={(event) => setNewDescription(event.target.value)}
        />

        <button
          type="submit"
          variant="outlined"
          onClick={() => {
            editAnActivity();
          }}
        >
          Edit Activity
        </button>
      </form>
    </div>
  );
};

export default EditActivity;

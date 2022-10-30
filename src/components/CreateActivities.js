import React, { useState } from "react";
import { createActivity } from "../api";
import { TextField, Button, Popover, Typography } from "@mui/material";
import logoIMG from "./images/create_activity.jpg";
const CreateActivity = ({ token, navigate, fetchActivities, activities }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const newActivity = {
    name,
    description,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [error, setError] = useState("");

  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    const results = await createActivity(token, newActivity);
    console.log(results, "TEST");
    if ("error" in results) {
      setError(results.error);
    } else {
      setError("new!");
      fetchActivities();
      navigate("/activities");
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div >
      <img src={logoIMG} style={{ width: "100%"}} />
    </div>
    <div className="create-activity">
      <TextField
        type="text"
        placeholder="Name*"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        type="text"
        placeholder="Description*"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <Button
        variant="outlined" color="error" style={{color: "white",background: "red", width: "100%"}}
        aria-describedby={id}
       
        onClick={handleClick}
      >
        Create A New Activity
      </Button>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>{error}</Typography>
      </Popover>
      
    </form>
  );
};

export default CreateActivity;

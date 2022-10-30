import React, { useState } from "react";
import { createActivity } from "../api";
import { TextField, Button, Popover, Typography } from "@mui/material";

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
        style={{ height: "3rem", margin: ".25rem" }}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
      >
        Create A New Activity
      </Button>
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

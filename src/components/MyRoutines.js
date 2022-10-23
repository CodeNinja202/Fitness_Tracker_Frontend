import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const MyRoutines = () => {
    return (
        <>
        <h1>My Routines</h1>
        <Link style={{ textDecoration: 'none' }} to="/routines/create_routine"><Button> Create A Routine</Button></Link>
        </>
    )
}


export default MyRoutines;
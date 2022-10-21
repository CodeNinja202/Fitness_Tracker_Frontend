
import React, { useState, useEffect } from "react";
import {Route, Routes} from 'react-router-dom';

import {
    Navbar,
   Activites,
   Home,
   Login,
   MyRoutines,
   Register,
   Routines,
  } from "./components";
import { getRoutines, getActivities } from './api'

const App = () => {
const [routines, setRoutines] = useState([]);
const [activities, setActivies] = useState([]);

async function fetchActivities() {
    const results= await getActivities()
    setActivies(results)
    
   }

async function fetchRoutines() {
 const results= await getRoutines()
 setRoutines(results)
 
}

useEffect(() => {
    fetchActivities()
}, [])
useEffect(() => {
    fetchRoutines()
}, [])
    return ( 
        <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activities" element={<Activites activities={activities}/>} />
        <Route path="/routines" element={<Routines routines={routines}/>} />
        <Route path="/my_routines" element={<MyRoutines />} />
       
        </Routes>
        </div>
    )
}


export default App;
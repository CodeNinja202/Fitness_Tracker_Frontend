
import React from "react";
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


const App = () => {
    return ( 
        <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/activities" element={<Activites />} />
        <Route path="/routines" element={<Routines />} />
        <Route path="/my_routines" element={<MyRoutines />} />
       
        </Routes>
        </div>
    )
}


export default App;
import React from "react";
import  ReactDOM  from "react-dom/client";
import  './style.css';
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
        <Home />
        <Login />
        <Register />
        <Activites />
        <Routines />
        <MyRoutines />

        </div>
    )
}



const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(
 
    <App />
 
);
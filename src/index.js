import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import CssBaseline from '@mui/material/CssBaseline';


const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);
root.render(
  
  <BrowserRouter>
 
      
    <App />
   
  </BrowserRouter>
);

import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import {
  Navbar,
  Activites,
  Home,
  Login,
  MyRoutines,
  Register,
  Routines,
  CreateRoutine,
} from "./components";
import { getRoutines, getActivities, getUserDetails } from "./api";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivies] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }

  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }

  async function fetchActivities() {
    const results = await getActivities();
    setActivies(results);
  }

  async function fetchRoutines() {
    const results = await getRoutines();
    setRoutines(results);
  }

  async function getMe() {
    const storedToken = window.localStorage.getItem('token');

    if (!token) {
      if (storedToken) {
        setToken(storedToken);
      }
      return;
    }

 
    const results = await getUserDetails(token);
    if (results.username) {
        console.log("Users Logged in")
      setUser(results.data);
    } else {
        console.log("User Not logged IN")
      console.log("CAN NOT GET USERS DETAILS");
    }
  }

  useEffect(() => {
    fetchActivities()
  }, [])

  useEffect(() => {
    fetchRoutines()
  }, [token])

  useEffect(() => {
    getMe();
  },[token])
  return (
    <div>
      <Navbar logout={logout} token={token} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setToken={setToken}
                  navigate={navigate} />} />
        <Route
          path="/register"
          element={
            <Register setToken={setToken} token={token} navigate={navigate} />
          }
        />
        <Route
          path="/activities"
          element={<Activites activities={activities} token={token}
          navigate={navigate}  />}
        />
        <Route path="/routines" element={<Routines routines={routines} />} />
        <Route path="/routines/create_routine" element={<CreateRoutine />} />
        <Route path="/my_routines" element={<MyRoutines />} />
      </Routes>
    </div>
  );
};

export default App;

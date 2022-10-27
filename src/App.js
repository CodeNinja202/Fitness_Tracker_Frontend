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
  CreateActivity,
  EditRoutine,
  EditActivity,
} from "./components";
import { getRoutines, getActivities, getUserDetails, getUsersRoutines } from "./api";


const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivies] = useState([]);
  const [routinesByUser, setUserRoutines] = useState([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  console.log("TESTING USER AT Beginning ", user)
  ///////////////////////TEST


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
       
      setUser(results);
      console.log("Users Logged in", results)
    } else {
        console.log("User Not logged IN")
      console.log("CAN NOT GET USERS DETAILS");
    }
  }


console.log("WHO are you",user)
  const navigate = useNavigate();
  function logout() {
    window.localStorage.removeItem("token");
    setToken("");
    setUser({});
  }

  async function fetchUserRoutines(user) {
    
    console.log("fetchUserRoutines BEFORE getUsersRoutines TEST", user)
    const results = await getUsersRoutines(user);
  
    setUserRoutines(results.username)
  }

  async function fetchActivities() {
    const results = await getActivities();
    setActivies(results);
  }
 

  async function fetchRoutines() {
    const results = await getRoutines();
    setRoutines(results);
  }

  
 
  useEffect(() => {
    fetchActivities()
  }, [])

  useEffect(() => {
    fetchRoutines()
  }, [token])
  useEffect(() => {
    fetchUserRoutines()
  }, [])
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
        <Route
          path="/activities/create_activity"
          element={<CreateActivity token={token}
          navigate={navigate} fetchActivities={fetchActivities} />}
        />
        <Route path="/activities/edit/:activityId" element={<EditActivity activities={activities} token={token} fetchActivities={fetchActivities}  />} />
        <Route path="/routines" element={<Routines routines={routines}  token={token}/>} />
        <Route path="/routines/create_routine" element={<CreateRoutine token={token} fetchRoutines={fetchRoutines}  navigate={navigate} />} />
        <Route
             
              path="/routines/edit-routine/:routineId"
              element={
                <EditRoutine
                 routines={routines}
                 token={token}
                  fetchRoutines={fetchRoutines}
                  navigate={navigate}
                />
              }
            />
       
        <Route path="/my_routines" element={<MyRoutines routinesByUser={routinesByUser}  fetchUserRoutines={fetchUserRoutines} />}  />
      </Routes>
    </div>
  );
};

export default App;

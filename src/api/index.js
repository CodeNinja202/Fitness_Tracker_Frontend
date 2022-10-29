const baseURL = "https://fitnesstrac-kr.herokuapp.com/api";

export const getRoutines = async () => {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("error getting all routines");
  }
};

export const getActivities = async () => {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    console.log("error getting all activities");
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log("API Register TEST",result)
    return result;
  } catch (error) {
    console.log("error registering user");
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.json();

    return result;
  } catch (ex) {
    console.log("error logging in user");
  }
};



export const getUserDetails = async (token) => {
  //console.log("TESTING TOKEN", token)
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      
    })
    
    const result = await response.json();
    //console.log("TESTING GET USER", result)
    return result;
    
  } catch(ex) {
    console.log('error getting users details')
  }
}

console.log('TESTING API GET USER BEFORE GET USERS')
export const getUsersRoutines = async (username) => {
  console.log('testing username in API getUsersRoutines', username)
  try {
    
    const response = await fetch(`${baseURL}/users/${username}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        
      },
    
    })
    const result = await response.json();
    console.log("getUsers Routines",result)
    return result
  } catch (error) {
    console.log(`error getting all routines for ${username}`)
  }
}


export const createRoutine = async (token, {name, goal, isPublic})=> {
  try {
    const response = await fetch(`${baseURL}/routines`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
       
          name,
          goal,
          isPublic,
        
     
      })
    })
    
    const result = await response.json();
    return result;
  } catch(ex) {
    console.log('error creating a new post')
  }
}


export const createActivity = async (token, {name, description})=> {
  try {
    const response = await fetch(`${baseURL}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
       
          name,
          description
        
     
      })
    })

    
    
    const result = await response.json();
    return result;
  } catch(error) {
    console.log('error creating a new activity')
  }
}




export const updateActivity = async ({ name, description}) => {
  try {
    const response = await fetch(`${baseURL}/activities/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify({

        name,
        description

      })
    })
    const results = await response.json();
    console.log(results)
    return (results)

  } catch (ex) {
    console.log('error updating activity')
  }
}



console.log('Before beginning update API')
export const updateRoutine = async(token, {name, goal, isPublic}, routineId) => {
  console.log('beginning update')
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic
      })
    })
    const result = await response.json();
    console.log("TESTING API RESULT", result)
    return result
  } catch (error) {
    console.log(`error updating routine ${name}`)
  }
}

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const results = await response.json();
    console.log(results)
    return (results)
  } catch (ex) {
    console.log('error deleting routine')
  }
}




// export const getRoutineActivity = async (activityId) => {
//   try {
//     const response = await fetch(`${baseURL}/activities/${activityId}/routines`, {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     const results = await response.json();
//     return results;
//   } catch (error) {
//     console.log("error getting all routine activity");
//   }
// };


export const createRoutineActivity= async ({token, activityId, count, duration, routineId} )=> {
  try {
    const response = await fetch(`${baseURL}/routines/${routineId}/activities`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
       activityId,
        count,
        duration
     
      })
    })
    
    const result = await response.json();
    return result;
  } catch(ex) {
    console.log('error creating a new routine activity')
  }
}


export const updateRoutineActivity = async(token, {count, duration}, routineActivityId) => {
  console.log('beginning update')
  try {
    const response = await fetch(`${baseURL}/routine_activities/${routineActivityId}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        
        count,
        duration
      })
    })
    const result = await response.json();
    console.log("TESTING API RESULT", result)
    return result
  } catch (error) {
    console.log(`error updating routine activity `)
  }
}

export const deleteRoutineActivity = async (token, routineActivityId) => {
  try {
    const response = await fetch(`${baseURL}/routine_activities/${routineActivityId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    const results = await response.json();
    console.log(results)
    return (results)
  } catch (ex) {
    console.log('error deleting routine activity')
  }
}



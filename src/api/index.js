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
  console.log("TESTING TOKEN", token)
  try {
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      
    })
    
    const result = await response.json();
    console.log("TESTING GET USER", result)
    return result;
    
  } catch(ex) {
    console.log('error getting users details')
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

// export const getUsersRoutines = async() => {
//   try {
//     const response = await fetch(`${baseURL}/users/:username/routines`, {
//       headers: {
//         'Content-Type': 'application/json',
       
        
        
        
//       }
//     });
//     const results = await response.json();
    
//     return results;
//   } catch(error) {
//     console.log('error getting all users routines')
//   }
// }
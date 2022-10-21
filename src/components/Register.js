import React, { useState } from "react";

const Register = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
 
return (
    <form onSubmit={(event) => {
    event.preventDefault()
   
         }}>
      <input type="text" 
      placeholder="Username" 
      onChange={(event) => setUsername(event.target.value) }
      />


      <input type="password"
       placeholder="Password"
       onChange={(event) => setPassword(event.target.value)}
        />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Register;

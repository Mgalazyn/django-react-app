import React, { useState } from "react";
import Login from "./Login";


const App = () => {
  const [unauthorized, setUnauthorized] = useState(false);
  
  return (
    <div>
      <h1>Login page {unauthorized} </h1>
      <Login />
      <button 
        type="button"
        onClick={() => setUnauthorized(true)}
      >Login in
      </button>
      
      
    </div>
  );
};

export default App;

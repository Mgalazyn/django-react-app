import React, { useState } from "react";
import Login from "./Login";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);

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

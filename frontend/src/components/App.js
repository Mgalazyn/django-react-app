import React, { useState, useEffect } from "react";
import Login from "./Login";


const App = () => {
  const [data, setData] = useState(null);
  
  useEffect (() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);

 return (
  <>
    < Login />
    {data &&
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
  </>
);
};

export default App;

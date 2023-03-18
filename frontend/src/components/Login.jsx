import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Username"> Username </label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="username"
          id="username"
        />
      <label htmlFor="password"> Password </label>
        Password:
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          id="password"
        />
        <button type="submit">Submit </button>
    </form>
  );
};

export default Login;
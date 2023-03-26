import React, { useState } from "react";
import logoImg from "./images/logo-no-background.jpg";
import Footer from "./Footer";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api-auth/login/", {
        username,
        password,
      });
      if (response.data.success) {
        // Login succeeded
        console.log('Login succeeded');
      } else {
        // Login failed
        console.log('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevState) => !prevState);
  };
  return (
    <>
      <div className="over-login-card"> 
        <div className="about-login-card">
          <div className="login-card-logo">
            <img src={logoImg} alt='logo-img' />
          </div>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <label htmlFor="username">Email: </label>
              <input
                type="username"
                id="username"
                placeholder="your-email@gmail.com "
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
                />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="your password: "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              <center>
                <button className="login-btn" type="submit">
                  {isLoginMode ? "Login" : "Register"}
                </button>
              </center>
            </form>
          </div>
          <div className="below-login-card">
            <h3 className="text-container">
              {isLoginMode ? "Don't have an account?" : "Already have an account?"}
              <button type="button" onClick={switchModeHandler} className="text-btn">
                {isLoginMode ? " Sign Up" : " Login"}
              </button>
            </h3>
            <center><p><a href="/forget-password">Forget password?</a></p></center>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Login;
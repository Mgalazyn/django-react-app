import React, { useState } from "react";
import logoImg from "./images/logo-no-background.jpg";
import Footer from "./Footer";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLoginMode, setIsLoginMode] = useState(true);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/create/", {
        email,
        password,
        username,

      });
      if (response.data.success) {
        // Login succeeded
        console.log('Register succeeded');
        navigate('/Login')
      } else {
        // Login failed
        console.log('Register failed:', response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
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
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Your-email@gmail.com "
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
              <label htmlFor="username">Username: </label>
              <input
                type="username"
                id="username"
                placeholder="Your username: "
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="Your password: "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />

              <center>
                <button className="login-btn" type="submit">
                  Register
                </button>
              </center>
            </form>
          </div>
          <div className="below-login-card">
            <h3 className="text-container">
              <p> Already have an account? </p>
              <button type="button" className="text-btn" onClick={() => {navigate('/Login')}}>
                Login
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
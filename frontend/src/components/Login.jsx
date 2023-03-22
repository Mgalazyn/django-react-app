import React, { useState } from "react";
import logoImg from "./images/logo-no-background.jpg";
import Footer from "./Footer"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="your-email@gmail.com "
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                />
              <label htmlFor="password">Password: </label>
              <input
                type="password"
                id="password"
                placeholder="your password: "
                value={password}
                onChange={(event) => setPassword(event.target.value)}
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
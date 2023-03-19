import Navbar from "./components/Nav_bar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";

import { Route, Routes } from 'react-router-dom';


function App() {

 return (
  <>
    <div className="nav-containter">
      <Navbar/>
      <div className="banner"></div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/About" element={<About />} />
    </Routes>


  </>
);
};

export default App;
 
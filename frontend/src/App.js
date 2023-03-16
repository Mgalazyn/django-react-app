import Navbar from "./components/Nav_bar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import { Route, Routes } from 'react-router-dom';


function App() {

 return (
  <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  </>
);
};

export default App;

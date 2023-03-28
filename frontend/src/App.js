import Navbar from "./components/Nav_bar";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Exercises from "./components/Exercises";
import Register from "./components/Register";
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
      <Route path='/Register' element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Workout" element={<Exercises />} />
    </Routes>


  </>
);
};

export default App;
 
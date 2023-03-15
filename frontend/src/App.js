import Navbar from "./components/Nav_bar";
import Home from "./components/Home";
import Login from "./components/Login";
import { Route, Routes } from 'react-router-dom';


function App() {

 return (
  <>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  </>
);
};

export default App;

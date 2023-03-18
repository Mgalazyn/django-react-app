import Navbar from "./components/Nav_bar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Boxes from "./components/Boxes";
import Price from "./components/Price";
import { Route, Routes } from 'react-router-dom';

const about = new URL("./components/images/about.png", import.meta.url)
const workout = new URL("./components/images/workout.png", import.meta.url)
const diet = new URL("./components/images/diet.png", import.meta.url)
const price1 = new URL("./components/images/price1.png", import.meta.url)
const price2 = new URL("./components/images/price2.png", import.meta.url)
const price3 = new URL("./components/images/price3.png", import.meta.url)


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
    <Boxes about={about} workout={workout} diet={diet} />
    <Price price1={price1} price2={price2} price3={price3} />
  </>
);
};

export default App;

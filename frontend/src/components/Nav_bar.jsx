import React from "react";
import { useState } from "react";


function Navbar({}) {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem("isLoggedIn") === "true"
    );

    return <nav className='nav'>
        <a href='/' className='site-title'>Gym_app</a>
        <ul>
            {isLoggedIn && <li><a href='/workout'> Workout </a></li>}
            <li><a href='/Contact'> Contact </a></li>
            <li><a href='/login'>Login/Sign In</a></li>
        </ul>
    </nav>
}


export default Navbar;
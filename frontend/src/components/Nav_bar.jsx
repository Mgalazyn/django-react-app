import React from "react";

function Navbar() {
    return <nav className='nav'>
        <a href='/' className='site-title'>Gym_app</a>
        <ul>
            <li><a href='/workout'> Workout </a></li>
            <li><a href='/Contact'> Contact </a></li>
            <li><a href='/login'>Login/Sign In</a></li>
        </ul>
    </nav>
}


export default Navbar;
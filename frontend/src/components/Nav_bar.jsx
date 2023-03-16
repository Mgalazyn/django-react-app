import React from "react";

export default function Navbar() {
    return <nav className="nav">
        <a href='/' className='site-title'>Gym_app</a>
        <ul>
            <li>
                <a href='/about'> About </a>
            </li>
            <li>
                <a href='/login'>Login/Sign In</a>
            </li>
        </ul>
    </nav>
}
import React from "react";

export default function Navbar() {
    return <nav className="nav">
        <a href='/' className='site-title'>Main page</a>
        <ul>
            <li>
                <a href='/login'>Login/Sign In</a>
            </li>
        </ul>
    </nav>
}
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <a href="/">Poke'App</a>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </nav>
    )
}

export default Navbar
// components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/ngo" className="logo">
                NGO Connect
            </Link>
            <div className="navbar-user">
                <Link to="/profile">
                <img
                    src="https://lebanon.makesense.org/wp-content/uploads/sites/25/2022/05/lgoo-dark.png"
                    alt="avatar"
                    className="avatar"
                />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;

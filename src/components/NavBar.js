import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <ul>
                <div className="wrapper">
                    <div className="logo">
                        <li className="navLink" id="text">
                            <Link to="/">Home</Link>
                        </li>
                    </div>
                </div>
                <li className="navLink">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;
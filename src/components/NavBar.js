import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <ul className="nav_ul">
                <li className="navLink" id="logo">
                    <Link to="/"><img src="http://localhost:3000/images/logowhite.png" height="40" alt="logo" /></Link>
                </li>
                <li className="navLink">
                    <Link to="/articles">All Stories</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/topstories">Top Stories</Link>
                </li>
                <li className="navLink">
                    <Link to="/articles">Articles</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/news">News</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/politics">Politics</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/entertainment">Entertainment</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/sports">Sports</Link>
                </li>
               
                
            </ul>
        </header>
    )
}

export default NavBar;
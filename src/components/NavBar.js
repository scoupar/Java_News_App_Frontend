import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <ul>
            <div className="logo navLink">
                <li className="navLink">
                    <Link to="/">CCNEWS</Link>
                </li>
            </div>
                <li className="navLink" id="text">
                    <Link to="/">Home</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/topstories">Top Stories</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/sports">Sports</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/news">News</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/entertainment">Entertainment</Link>
                </li>
                <li className="navLink" id="text">
                    <Link to="/articles/politics">Politics</Link>
                </li>
                <li className="navLink">
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;
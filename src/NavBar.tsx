import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Tournament1">Tournament1</Link>
                    </li>
                    <li>
                        <Link to="/Quiz">Quiz</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar;
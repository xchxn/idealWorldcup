import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                    <li style={{ marginRight: '50px' }} >
                        <Link to="/">Home</Link>
                    </li>
                    <li style={{ marginRight: '50px' }}>
                        <Link to="/Tournament1">Tournament1</Link>
                    </li>
                    <li>
                        <Link to="/Quiz">Quiz</Link>
                    </li>
                </ul>
            </nav>
    )
}
export default NavBar;
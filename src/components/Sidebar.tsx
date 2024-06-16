import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {

    const location = useLocation(); // Get the current path

    const isActive = (path) => location.pathname === path;

    return (
        <div className="sidebar">
            
            <h2>MentAI</h2>
            <div>
                <nav>
                    <ul>
                        <li>
                        <Link to="/" className={isActive('/') ? 'active' : ''}>Chat</Link>
                        </li>
                        <li>
                        <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>Contacts</Link>
                        </li>
                        <li>
                        <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

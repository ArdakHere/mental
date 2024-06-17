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
                        <Link to="/" style={{width: '120%'}} className={isActive('/') ? 'active' : ''}>Chat <span className="chat_icon" style={{marginLeft: '90px'}}>🤖</span></Link>
                        </li>
                        <li>
                        <Link to="/contacts" style={{width: '120%'}} className={isActive('/contacts') ? 'active' : ''}>Contacts <span style={{marginLeft: '42px'}}>📩</span></Link>
                        </li>
                        <li>
                        <Link to="/faq" style={{width: '120%'}} className={isActive('/faq') ? 'active' : ''}>FAQ <span style={{marginLeft: '100px'}}>🤔</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

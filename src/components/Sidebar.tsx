import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isSidebarVisible ? 'visible' : 'hidden'}`}>
        <button className="hide_button" onClick={toggleSidebar}>
            {isSidebarVisible ? '<' : '>'}
        </button>
        <h2 className="mentai-heading">
            <div>
                Ment<span className="ai">AI</span>
            </div>
        </h2>
        <nav>
            <ul>
            <li>
                <Link to="/" className={isActive('/') ? 'active' : ''}>
                Chat <span className="chat_icon">🤖</span>
                </Link>
            </li>
            <li>
                <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
                Profile <span>👩🏻‍💻</span>
                </Link>
            </li>
            <li>
                <Link to="/payments" className={isActive('/payments') ? 'active' : ''}>
                Payments <span>💵</span>
                </Link>
            </li>
            <li>
                <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>
                Contacts <span>📩</span>
                </Link>
            </li>
            <li>
                <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>
                FAQ <span>🤔</span>
                </Link>
            </li>
            </ul>
        </nav>
    </div>
  );
};

export default Sidebar;

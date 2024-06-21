import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import '/src/i18n'; // Import the i18n configuration

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
    const { i18n } = useTranslation();

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        
    const { t } = useTranslation();

    
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
                    {t('sidebar_chat')} <span className="chat_icon">🤖</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile" className={isActive('/profile') ? 'active' : ''}>
                    {t('sidebar_profile')} <span>👩🏻‍💻</span>
                    </Link>
                </li>
                <li>
                    <Link to="/payments" className={isActive('/payments') ? 'active' : ''}>
                    {t('sidebar_payments')} <span>💵</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className={isActive('/contacts') ? 'active' : ''}>
                    {t('sidebar_contacts')} <span>📩</span>
                    </Link>
                </li>
                <li>
                    <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>
                    FAQ <span>🤔</span>
                    </Link>
                </li>
                <div className="translation_buttons">
                    <div className="button" onClick={() => changeLanguage('en')}>ENG</div>
                    <div className="button" onClick={() => changeLanguage('ru')}>РУС</div>
                    <div className="button" onClick={() => changeLanguage('kz')}>ҚАЗ</div>

                </div>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;

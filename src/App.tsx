import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Contacts from './pages/Contacts';
import Faq from './pages/Faq';
import Profile from './pages/Profile';
import Payments from './pages/Payments';

function App() {
    const [isSidebarVisible, setSidebarVisible] = useState(true);
    const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

    const [showOverlay, setShowOverlay] = useState(true);
    const [overlayText, setOverlayText] = useState("hello");
    const [blurComplete, setBlurComplete] = useState(false);

    useEffect(() => {
        const texts = [
            "we help you become better",
            "we do NOT store your data",
            "we make you feel comfortable and safe",
        ];
        let index = 0;

        const textDisplayDuration = 1000; // Show each text for 3 seconds
        const textChangeInterval = setInterval(() => {
            if (index < texts.length) {
                setOverlayText(texts[index]);
                index++;
            } else {
				setShowOverlay(false);
                // Start the blur removal process after texts disappear
                setBlurComplete(true);
            }
        }, textDisplayDuration);

        return () => {
            clearInterval(textChangeInterval);
        };
    }, []);

    useEffect(() => {
        if (blurComplete) {
			setTimeout(() => {
				setShowOverlay(false);
			}, 100);
		}
    }, [blurComplete]);

    // Function to split text and add styles
    const formatText = (text: string) => {
        const parts = text.split(' ');

        return parts.map((part, index) => {
            let style = {};
            if (part === "NOT") { // Example condition for a different color
                style = { color: 'red' };
            } else if (part === "better") { // Another example
                style = { color: 'green' };
            } else if (part === "safe" || part === "comfortable") {
                style = { color: '#6F7DFF' };
            }

            return <span key={index} style={style}>{part} </span>;
        });
    };

    // Handle click to remove blur
    const handleOverlayClick = () => {
        setBlurComplete(true);
    };

    return (
        <Router>
            {showOverlay && (
                <div className={`overlay ${blurComplete ? 'fade-blur' : ''}`} onClick={handleOverlayClick}>
                    <div className="overlay-content">
                        {formatText(overlayText)}
                    </div>
                </div>
            )}
            <div className={`app ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
                <Sidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
                <Routes>
                    <Route path="/" element={<Chat />} /> 
					
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/faq" element={<Faq />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/payments" element={<Payments />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

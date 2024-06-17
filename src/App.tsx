import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Contacts from './pages/Contacts'
import Faq from './pages/Faq'


function App() {
  
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  
  return (
    <Router>
      <div className={`app ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
        {<Sidebar />}
        <div className="hide_button" onClick={toggleSidebar}>
          {isSidebarVisible ? '<' : '>'}
        </div>
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

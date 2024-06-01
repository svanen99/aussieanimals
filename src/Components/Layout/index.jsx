import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import layoutStyles from './Layout.module.css';
import sidebarStyles from '../Sidebar/Sidebar.module.css';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={layoutStyles.layout}>
      <button className={layoutStyles.hamburger} onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`${sidebarStyles.sidebar} ${sidebarOpen ? sidebarStyles.open : ''}`}>
        <Sidebar />
      </div>
      <div className={layoutStyles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;

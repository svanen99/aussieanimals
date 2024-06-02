import React from 'react';
import Sidebar from '../Sidebar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
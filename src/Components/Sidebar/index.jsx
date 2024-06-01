import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <div className={styles.sidebar}>
      <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/'>Home</NavLink>
      <div>
        <div onClick={() => handleCategoryClick('mammals')} className={styles.category}>Mammals</div>
        {selectedCategory === 'mammals' && (
          <div className={styles.subMenu}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/echidna'>Echidna</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/quokka'>Quokka</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/tasmaniandevil'>Tasmanian Devil</NavLink>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => handleCategoryClick('reptiles')} className={styles.category}>Reptiles</div>
        {selectedCategory === 'reptiles' && (
          <div className={styles.subMenu}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/hawksbillturtle'>Hawksbill Turtle</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/perentie'>Perentie</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/frillneckedlizard'>Frill-necked Lizard</NavLink>
          </div>
        )}
      </div>
      <div>
        <div onClick={() => handleCategoryClick('birds')} className={styles.category}>Birds</div>
        {selectedCategory === 'birds' && (
          <div className={styles.subMenu}>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/kookaburra'>Kookaburra</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/yellowtailedblackcockatoo'>Yellow-tailed Black Cockatoo</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to='/cassowary'>Cassowary</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

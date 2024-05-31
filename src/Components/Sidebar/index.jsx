import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = () => {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };
    return (
        <div className={styles.sidebar}>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Home</NavLink>
            <div>
                <div onClick={() => handleCategoryClick('mammals')} className={styles.category}>Mammals</div>
                {selectedCategory === 'mammals' && (
                    <div className={styles.subMenu}>
                        <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/echidna'>Echidna</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/quokka'>Quokka</NavLink>
                        <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/tasmaniandevil'>Tasmaniandevil</NavLink>
                    </div>
                )}
            </div>


            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/birds'>Birds</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/reptiles'>Reptiles</NavLink>
        </div>
    );
}

export default Sidebar;

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './Navbar.module.css';

const Navbar = () => {
    const [showNavItems, setShowNavItems] = useState(false);

    const closeMenu = () => setShowNavItems(false);

    const handleClick = () => setShowNavItems(!showNavItems);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(`.${styles.navbar}`)) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className={styles.navbar}>
            <button onClick={handleClick} className={styles.hamburger}>☰</button>
            {showNavItems && (
                <div className={styles.navigation}>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/echidna'>Echidna</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='quokka'>Quokka</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='tasmaniandevil'>Tasmaniandevil</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/birds'>Birds</NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/reptiles'>Reptiles</NavLink>
                </div>
            )}
        </div>
    );
};

export default Navbar;

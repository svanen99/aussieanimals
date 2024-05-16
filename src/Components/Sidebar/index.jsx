import { NavLink } from "react-router-dom";
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/mammals'>Mammals</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/birds'>Birds</NavLink>
            <NavLink className={({ isActive }) => isActive ? styles.active : ''} to='/reptiles'>Reptiles</NavLink>
        </div>
    );
}

export default Sidebar;

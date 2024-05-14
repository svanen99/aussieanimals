import styles from './HomeHero.module.css';
import { Home } from '../../data/data';

const HomeHero = () => {
    return (
        <>
            <div className={styles.mainContainer}>
                <img src={Home.heroLogo} alt="Hero Logo" className={styles.heroLogo} />
                <h1>{Home.heroTitle}</h1>
                <p>{Home.aboutText}</p>
            </div>
        </>
    );
}

export default HomeHero;

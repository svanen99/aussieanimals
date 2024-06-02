import React from "react";
import { Birds } from '../../data/data';
import styles from './Cassowary.module.css';

const CassowaryComponent = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.logo}src="./Images/logga.jpeg" alt="logo" />
                <h2>Aussie Animals Zoo</h2>
            </div>
            <div className={styles.cassowary}>
                <h1>{Birds.namecassowary}</h1>
                <img className={styles.image} src="/Images/cassowary.jpeg" alt="picture of cassowary" />
                <p><strong>Lifespan:</strong> {Birds.lifespancassowary}</p>
                <p><strong>Group:</strong> {Birds.groupcassowary}</p>
                <p><strong>Food:</strong> {Birds.foodcassowary}</p>
                <p>{Birds.descriptioncassowary}</p>
                <p><strong>Length:</strong> {Birds.lengthcassowary}</p>
                <p><strong>Weight:</strong> {Birds.weightcassowary}</p>
                <p><strong>Found:</strong> {Birds.foundcassowary}</p>
            </div>
        </>
    )
}

export default CassowaryComponent
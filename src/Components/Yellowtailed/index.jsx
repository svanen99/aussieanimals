import React from "react";
import { Birds } from '../../data/data';
import styles from './Yellowtailed.module.css'

const YellowtailedComponent = () => {
    return (
        <>
            <div className={styles.yellowtailedblackcockatoo}>
                <h1>{Birds.nameyellowtailedblackcockatoo}</h1>
                <img className={styles.image} src="/Images/yellowtailedblackcockatoo.jpeg" alt="picture of yellow-tailed black cockatoo" />
                <p><strong>Lifespan:</strong> {Birds.lifespanyellowtailedblackcockatoo}</p>
                <p><strong>Group:</strong> {Birds.groupyellowtailedblackcockatoo}</p>
                <p><strong>Food:</strong> {Birds.foodyellowtailedblackcockatoo}</p>
                <p>{Birds.descriptionyellowtailedblackcockatoo}</p>
                <p><strong>Length:</strong> {Birds.lengthyellowtailedblackcockatoo}</p>
                <p><strong>Weight:</strong> {Birds.weightyellowtailedblackcockatoo}</p>
                <p><strong>Found:</strong> {Birds.foundyellowtailedblackcockatoo}</p>
            </div>
        </>
    )
}

export default YellowtailedComponent;
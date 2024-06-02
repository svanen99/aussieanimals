import React from "react"
import { Birds } from '../../data/data';
import styles from './Kookaburra.module.css'

const KookaburraComponent = () => {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.logo}src="./Images/logga.jpeg" alt="logo" />
            <h2>Aussie Animals Zoo</h2>
        </div>
        <div className={styles.kookaburra}>
            <h1>{Birds.namekookaburra}</h1>
            <img className={styles.image} src="/Images/kokkaburra.webp" alt="picture of kookaburra" />
            <p><strong>Lifespan:</strong> {Birds.lifespankookaburra}</p>
            <p><strong>Group:</strong> {Birds.groupkookaburra}</p>
            <p><strong>Food:</strong> {Birds.foodkookaburra}</p>
            <p>{Birds.descriptionkookaburra}</p>
            <p><strong>Length:</strong> {Birds.lengthkookaburra}</p>
            <p><strong>Weight:</strong> {Birds.weightkookaburra}</p>
            <p><strong>Found:</strong> {Birds.foundkookaburra}</p>
        </div>
        </>
    )
}
export default KookaburraComponent;
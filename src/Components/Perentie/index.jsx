import React from "react";
import { Reptiles } from "../../data/data";
import styles from './Perentie.module.css'

const PerentieComponent = () => {
    return (
        <>
            <div className={styles.perentie}>
                <h1>{Reptiles.nameperentie}</h1>
                <img src="/Images/perentie.jpeg" alt="picture of perentie" />
                <p><strong>Lifespan:</strong> {Reptiles.lifespanperentie}</p>
                <p><strong>Group:</strong> {Reptiles.groupperentie}</p>
                <p><strong>Food:</strong> {Reptiles.foodperentie}</p>
                <p>{Reptiles.descriptionperentie}</p>
                <p><strong>Length:</strong> {Reptiles.legnthperentie}</p>
                <p><strong>Weight:</strong> {Reptiles.weigthperentie}</p>
                <p><strong>Found:</strong> {Reptiles.foundperentie}</p>
            </div>
        </>
    )
}

export default PerentieComponent;
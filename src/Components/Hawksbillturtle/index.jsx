import React from 'react';
import { Reptiles } from '../../data/data';
import styles from './Hawksbillturtle.module.css';  

const HawksbillturtleComponent = () => {
    return (
        <>
            <div className={styles.hawksbillturtle}>
                <h1>{Reptiles.namehawksbillturtle}</h1>
                <img className={styles.image} src="/Images/hawksbillturtle.jpeg" alt="picture of turtle" />
                <p><strong>Lifespan:</strong> {Reptiles.lifespanhawksbillturtle}</p>
                <p><strong>Group:</strong> {Reptiles.grouphawksbillturtle}</p>
                <p><strong>Food:</strong> {Reptiles.foodhawksbillturtle}</p>
                <p>{Reptiles.descriptionhawksbillturtle}</p>
                <p><strong>Length:</strong> {Reptiles.lengthhawksbillturtle}</p>
                <p><strong>Weight:</strong> {Reptiles.weighthawksbillturtle}</p>
                <p><strong>Found:</strong> {Reptiles.foundhawksbillturtle}</p>
            </div>
        </>
    )
}
export default HawksbillturtleComponent
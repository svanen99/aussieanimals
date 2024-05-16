import React from 'react';
import { Mammals } from '../../../data/data';
import styles from './Echidna.module.css';  

const Echidna = () => {
  return (
    <div className={styles.container}>
      <h1>{Mammals.nameechidna}</h1>
      <img className={styles.image} src="/Images/echidna.webp" alt="picture of echidna" />
      <p><strong>Lifespan:</strong> {Mammals.lifespanechidna}</p>
      <p><strong>Group:</strong> {Mammals.groupechidna}</p>
      <p><strong>Food:</strong> {Mammals.foodechidna}</p>
      <p>{Mammals.descriptionechidna}</p>
      <p><strong>Length:</strong> {Mammals.lengthechidna}</p>
      <p><strong>Weight:</strong> {Mammals.weigthechidna}</p>
      <p><strong>Found:</strong> {Mammals.foundechidna}</p>
    </div>
  );
};

export default Echidna;
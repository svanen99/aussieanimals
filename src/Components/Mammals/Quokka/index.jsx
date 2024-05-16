import React from 'react';
import { Mammals } from '../../../data/data';
import styles from './Quokka.module.css';  

const Quokka = () => {
  return (
    <div className={styles.container}>
      <h1>{Mammals.namequokka}</h1>
      <img src="/Images/quokka.webp" alt="picture of quokka" />
      <p><strong>Lifespan:</strong> {Mammals.lifespanquokka}</p>
      <p><strong>Group:</strong> {Mammals.groupquokka}</p>
      <p><strong>Food:</strong> {Mammals.foodquokka}</p>
      <p>{Mammals.descriptionquokka}</p>
      <p><strong>Length:</strong> {Mammals.legnthquokka}</p>
      <p><strong>Weight:</strong> {Mammals.weigthquokka}</p>
      <p><strong>Found:</strong> {Mammals.foundquokka}</p>
    </div>
  );
};

export default Quokka;

import React from 'react';
import { Birds } from '../../data/data';
import styles from './Birds.module.css';  

const BirdsComponent = () => {
  return (
    <>
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
      <div className={styles.yellowtailedblackcockatoo}>
        <h1>{Birds.nameyellowtailedblackcockatoo}</h1>
        <img src="/Images/yellowtailedblackcockatoo.jpeg" alt="picture of yellow-tailed black cockatoo" />
        <p><strong>Lifespan:</strong> {Birds.lifespanyellowtailedblackcockatoo}</p>
        <p><strong>Group:</strong> {Birds.groupyellowtailedblackcockatoo}</p>
        <p><strong>Food:</strong> {Birds.foodyellowtailedblackcockatoo}</p>
        <p>{Birds.descriptionyellowtailedblackcockatoo}</p>
        <p><strong>Length:</strong> {Birds.lengthyellowtailedblackcockatoo}</p>
        <p><strong>Weight:</strong> {Birds.weightyellowtailedblackcockatoo}</p>
        <p><strong>Found:</strong> {Birds.foundyellowtailedblackcockatoo}</p>
      </div>
      <div className={styles.cassowary}>
        <h1>{Birds.namecassowary}</h1>
        <img src="/Images/cassowary.jpeg" alt="picture of cassowary" />
        <p><strong>Lifespan:</strong> {Birds.lifespancassowary}</p>
        <p><strong>Group:</strong> {Birds.groupcassowary}</p>
        <p><strong>Food:</strong> {Birds.foodcassowary}</p>
        <p>{Birds.descriptioncassowary}</p>
        <p><strong>Length:</strong> {Birds.lengthcassowary}</p>
        <p><strong>Weight:</strong> {Birds.weightcassowary}</p>
        <p><strong>Found:</strong> {Birds.foundcassowary}</p>
      </div>
    </>
  );
};

export default BirdsComponent;

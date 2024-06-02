import React from 'react';
import { Mammals } from '../../data/data';
import styles from './Tasmaniandevil.module.css';  

const MammalsTasmaniandevil = () => {
  return (
    <>
      <img src="" alt="" />
      <div className={styles.tasmaniandevil}>
      <h1>{Mammals.nametasmaniandevil}</h1>
        <img className={styles.image} src="/Images/tasmaniandevil.webp" alt="picture of tasmaniandevil" />
        <p><strong>Lifespan:</strong> {Mammals.lifespantasmaniandevil}</p>
        <p><strong>Group:</strong> {Mammals.grouptasmaniandevil}</p>
        <p><strong>Food:</strong> {Mammals.foodtasmaniandevil}</p>
        <p>{Mammals.descriptiontasmaniandevil}</p>
        <p><strong>Length:</strong> {Mammals.legnthtasmaniandevil}</p>
        <p><strong>Weight:</strong> {Mammals.weigthtasmaniandevil}</p>
        <p><strong>Found:</strong> {Mammals.foundtasmaniandevil}</p>
      </div>
    </>
  );
};

export default MammalsTasmaniandevil;
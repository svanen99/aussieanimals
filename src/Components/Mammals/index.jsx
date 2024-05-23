import React from 'react';
import { Mammals } from '../../data/data';
import styles from './Mammals.module.css';  

const MammalsComponent = () => {
  return (
    <>
      <div className={styles.echidna}>
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
      <div className={styles.quokka}>
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
      <div className={styles.tasmaniandevil}>
      <h1>{Mammals.nametasmaniandevil}</h1>
        <img src="/Images/tasmaniandevil.webp" alt="picture of tasmaniandevil" />
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

export default MammalsComponent;
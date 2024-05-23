import React from 'react';
import { Reptiles } from '../../data/data';
import styles from './Reptiles.module.css';  

const ReptilesComponent = () => {
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
        <p><strong>Weight:</strong> {Reptiles.weigthhawksbillturtle}</p>
        <p><strong>Found:</strong> {Reptiles.foundhawksbillturtle}</p>
      </div>
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
      <div className={styles.frillneckedlizard}>
        <h1>{Reptiles.namefrillneckedlizard}</h1>
        <img src="/Images/frillneckedlizard.jpeg" alt="picture of frillneckedlizard" />
        <p><strong>Lifespan:</strong> {Reptiles.lifespanfrillneckedlizard}</p>
        <p><strong>Group:</strong> {Reptiles.groupfrillneckedlizard}</p>
        <p><strong>Food:</strong> {Reptiles.foodfrillneckedlizard}</p>
        <p>{Reptiles.descriptionfrillneckedlizard}</p>
        <p><strong>Length:</strong> {Reptiles.legnthfrillneckedlizard}</p>
        <p><strong>Weight:</strong> {Reptiles.weigthfrillneckedlizard}</p>
        <p><strong>Found:</strong> {Reptiles.foundfrillneckedlizard}</p>
      </div>
    </>
  );
};

export default ReptilesComponent;

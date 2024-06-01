import React from "react";
import { Reptiles } from "../../data/data";
import styles from './Frilled.module.css'

const FrillneckedlizardComponent = () => {
    return (
        <>
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
    )
}

export default FrillneckedlizardComponent;
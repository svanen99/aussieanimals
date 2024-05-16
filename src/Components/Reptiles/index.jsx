import React from 'react';
import { useParams } from 'react-router-dom';
import { Mammals, Birds, Reptiles } from '../../data/data';

const AnimalPage = () => {
  const { animalId } = useParams();

  let animalData;
  if (Mammals[animalId]) {
    animalData = Mammals[animalId];
  } else if (Birds[animalId]) {
    animalData = Birds[animalId];
  } else if (Reptiles[animalId]) {
    animalData = Reptiles[animalId];
  } else {
    animalData = null;
  }

  return (
    <div>
      {animalData ? (
        <div>
          <h1>{animalData.name}</h1>
          <p>Lifespan: {animalData.lifespan}</p>
          <p>Group: {animalData.group}</p>
          {/* Add more details here */}
        </div>
      ) : (
        <div>
          <h1>Animal not found</h1>
        </div>
      )}
    </div>
  );
}

export default AnimalPage;

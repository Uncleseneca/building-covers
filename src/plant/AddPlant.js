import React from 'react';
import { PlantForm } from './PlantForm';
import { PLANTS } from 'api/dictionaries';
import { firestore } from 'api/firebase';

const onSubmit = plant => {
  firestore.collection(PLANTS).add({ ...plant, createdAt: new Date() });
};

export const AddPlant = () => {
  return (
    <PlantForm title="Добавить растение" onSubmit={onSubmit} resetAfterSubmit />
  );
};

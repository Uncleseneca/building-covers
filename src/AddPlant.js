import React from 'react';
import { Form } from './Form';
import { firestore } from 'firebase';
import { PLANTS } from 'api/doc-types';

const onSubmit = plant => {
  firestore.collection(PLANTS).add({ ...plant, createdAt: new Date() });
};

export const AddPlant = () => {
  return <Form title="Добавить растение" onSubmit={onSubmit} />;
};

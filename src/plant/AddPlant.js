import React from 'react';
import { Form } from '../Form';
import { PLANTS } from 'api/doc-types';
import { firestore } from 'api/firebase';

const onSubmit = plant => {
  firestore.collection(PLANTS).add({ ...plant, createdAt: new Date() });
};

export const AddPlant = () => {
  return (
    <Form title="Добавить растение" onSubmit={onSubmit} resetAfterSubmit />
  );
};

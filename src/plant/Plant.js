// @ts-check
import React from 'react';
import { Form } from '../Form';
import { PLANTS } from 'api/doc-types';
import { firestore } from 'api/firebase';
import { usePlant } from 'plant/usePlant';
import { useParams, useHistory } from 'react-router-dom';

const sendFormData = async plant => {
  await firestore
    .collection(PLANTS)
    .doc(plant.id)
    .update(plant);
};

export const Plant = () => {
  const { push } = useHistory();
  const { id } = useParams();
  const plant = usePlant(id);

  const onSubmit = async values => {
    await sendFormData(values);
    push('/plants');
  };
  return (
    <Form defaultValues={plant} title="Изменить растение" onSubmit={onSubmit} />
  );
};

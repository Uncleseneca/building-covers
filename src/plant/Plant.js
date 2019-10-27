// @ts-check
import React from 'react';
import { PlantForm } from './PlantForm';
import { PLANTS } from 'api/dictionaries';
import { firestore } from 'api/firebase';
import { usePlant } from 'plant/helpers/usePlant';
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
    <PlantForm
      defaultValues={plant}
      title="Изменить растение"
      onSubmit={onSubmit}
    />
  );
};

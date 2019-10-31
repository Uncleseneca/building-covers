import React from 'react';
import { calculateCostPrice } from './helpers/calculateCostPrice';
import { calculateWorkComplexity } from './helpers/calculateWorkComplexity';
import { calculateWorkDuration } from './helpers/calculateWorkDuration';

export const Results = ({ plant, estimateContext }) => {
  return (
    <div>
      <h3>{plant.name}</h3>
      <p>Себестоимость работ</p>
      <p>{calculateCostPrice({ ...plant, ...estimateContext })}</p>
      <p>Трудоемкость работ</p>
      <p>{calculateWorkComplexity({ ...estimateContext })}</p>
      <p>Продолжительность работ</p>
      <p>{calculateWorkDuration({ ...estimateContext })}</p>
    </div>
  );
};

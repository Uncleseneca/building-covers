import React, { createContext, useContext } from 'react';
import { usePlants } from './helpers/usePlants';

export const plantsContext = createContext(null);
export const usePlantsContext = () => useContext(plantsContext);

export const PlantsContextProvider = ({ children }) => {
  const plants = usePlants();
  return (
    <plantsContext.Provider value={plants}>{children}</plantsContext.Provider>
  );
};

// @ts-check

import { useEffect, useRef, useState } from 'react';
import { PLANTS } from '../api/doc-types';
import { firestore } from '../api/firebase';

export const usePlant = id => {
  const [plant, setPlant] = useState(null);
  const unsubscribeFireStore = useRef(null);
  useEffect(() => {
    unsubscribeFireStore.current = firestore
      .collection(PLANTS)
      .doc(id)
      .onSnapshot(snapshot => {
        const plant = { ...snapshot.data(), id: snapshot.id };
        setPlant(plant);
      });
    return unsubscribeFireStore.current;
  }, [id]);
  return plant;
};

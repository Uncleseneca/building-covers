import { collectIdsAndDocs } from 'api/helpers';
import { useEffect, useRef, useState } from 'react';
import { PLANTS } from '../api/doc-types';
import { firestore } from '../api/firebase';

export const usePlants = () => {
  const [plants, setPlants] = useState(null);
  const unsubscribeFireStore = useRef(null);
  useEffect(() => {
    unsubscribeFireStore.current = firestore
      .collection(PLANTS)
      .onSnapshot(snapshot => {
        const plants = snapshot.docs.map(collectIdsAndDocs);
        setPlants(plants);
      });
    return unsubscribeFireStore.current;
  }, []);
  return plants;
};

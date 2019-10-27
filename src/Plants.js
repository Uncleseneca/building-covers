import { collectIdsAndDocs } from 'api/helpers';
import React, { useEffect, useRef, useState } from 'react';
import { PLANTS } from './api/doc-types';
import { firestore } from './api/firebase';

export function Plants() {
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

  return (
    <div>
      {plants && (
        <table>
          <thead>
            <tr>
              <td>Название</td>
              <td>Шумопоглощение</td>
              <td>Стоимость за метр квадратный</td>
            </tr>
          </thead>
          <tbody>
            {plants.map(plant => (
              <tr key={plant.id}>
                <td>{plant.name}</td>
                <td>{plant.noiseReduction}</td>
                <td>{plant.costPerMeter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { firestore } from './api/firebase';
import { collectIdsAndDocs } from 'api/helpers';
import { PLANTS } from './api/doc-types';
import { Form } from 'Form';

function App() {
  const [plants, setPlants] = useState(null);
  const unsubscribeFireStore = useRef(null);

  useEffect(() => {
    unsubscribeFireStore.current = firestore
      .collection(PLANTS)
      .onSnapshot(snapshot => {
        console.log('TCL: App -> snapshot', snapshot);
        const plants = snapshot.docs.map(collectIdsAndDocs);
        setPlants(plants);
      });
    return unsubscribeFireStore.current;
  }, []);

  console.log(plants);
  return (
    <div className="App">
      <header>
        <h1>Building covers</h1>
      </header>

      <Form />
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

export default App;

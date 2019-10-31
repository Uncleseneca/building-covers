import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { PlantsContextProvider } from 'plant/PlantsContext';

ReactDOM.render(
  <BrowserRouter>
    <PlantsContextProvider>
      <App />
    </PlantsContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.unregister();

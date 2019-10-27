import { AddPlant } from 'plant/AddPlant';
import { Plants } from 'plant/Plants';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { Plant } from 'plant/Plant';
import { CssBaseline } from '@material-ui/core';
import { Estimate } from 'plant/estimate/Estimate';

function App() {
  return (
    <div className="App">
      <CssBaseline />

      <header>
        <h1>Building covers</h1>
        <nav>
          <Link to="/plants">Все растения</Link>{' '}
          <Link to="/plants/add">Добавить растение</Link>{' '}
          <Link to="/plants/estimate">Расчитать</Link>{' '}
        </nav>
      </header>
      <Switch>
        <Route exact path="/plants" component={Plants}></Route>
        <Route exact path="/plants/add" component={AddPlant}></Route>
        <Route exact path="/plants/estimate" component={Estimate}></Route>
        <Route exact path="/plants/:id" component={Plant}></Route>
      </Switch>
    </div>
  );
}

export default App;

import { AddPlant } from 'AddPlant';
import { Plants } from 'Plants';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Building covers</h1>
        <nav>
          <Link to="/plants">Все растения</Link>{' '}
          <Link to="/plants/add">Добавить растение</Link>{' '}
        </nav>
      </header>
      <Switch>
        <Route exact path="/plants/add" component={AddPlant}></Route>
        <Route exact path="/plants" component={Plants}></Route>
      </Switch>
    </div>
  );
}

export default App;

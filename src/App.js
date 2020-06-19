import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// views
import Detail from './views/Detail';
import List from './views/List';

// components
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route exact path="/items">
          <List />
        </Route>

        <Route path="/items/:id">
          <Detail />
        </Route>

        <Route path="*">
          <List />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

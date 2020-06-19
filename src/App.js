import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

// components
import Detail from './components/Detail';
import List from './components/List';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/items">
          <List />
        </Route>

        <Route path="/items/:id">
          <Detail />
        </Route>

        <Redirect from="/" to={{ pathname: '/items' }}>
          <List />
        </Redirect>
      </Switch>
    </Router>
  );
};

export default App;

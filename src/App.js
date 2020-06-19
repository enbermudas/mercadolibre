import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MeliProvider } from './store';
import './App.scss';

// views
import Detail from './views/Detail';
import List from './views/List';

// components
import NavBar from './components/NavBar';

const App = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState({ categories: [], items: [] });

  return (
    <MeliProvider value={{ query, setQuery, list, setList }}>
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
    </MeliProvider>
  );
};

export default App;

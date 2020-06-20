import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MeliProvider } from './store';
import './App.scss';

// views
import Detail from './views/Detail';
import List from './views/List';

// components
import NavBar from './components/NavBar';
import Categories from './components/Categories';

const Main = styled.main.attrs({
  'data-testid': 'main',
  role: 'main'
})`
  max-width: 1200px;
  height: auto;
  display: block;
  padding: 0 30px;
  margin-bottom: 16px;

  @media (min-width: 992px) {
    padding: 0 60px;
  }
`;

const App = () => {
  const [query, setQuery] = useState('');
  const [list, setList] = useState({ categories: [], items: [] });
  const { categories } = list;

  return (
    <MeliProvider value={{ query, setQuery, list, setList }}>
      <Router>
        <NavBar />

        <Main>
          {categories.length > 0 && <Categories />}

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
        </Main>
      </Router>
    </MeliProvider>
  );
};

export default App;

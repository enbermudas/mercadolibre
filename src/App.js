import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom';
import { MeliProvider } from './store';
import './App.scss';

// views
import Detail from './views/Detail';
import List from './views/List';

// components
import Categories from './components/Categories';
import Loading from './components/Loading';
import NavBar from './components/NavBar';

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

const App = ({ history }) => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(null);
  const [item, setItem] = useState({});

  const handleSearch = async () => {
    setLoading(true);

    history.push('/items');

    setItems([]);
    setCategories([]);

    const { data } = await axios.get('/api/v1/items/', { params: { q: query } });

    setItems(data.items);
    setCategories(data.categories);
    setLoading(false);
  };

  useEffect(() => {
    if (id !== null) {
      setLoading(true);

      async function fetchItem() {
        setItem({});
        const { data } = await axios.get(`/api/v1/items/${id}`);
        setItem(data);
        setLoading(false);
      }

      fetchItem();
      history.push(`/items/${id}`);
    }
  }, [id, history]);

  return (
    <MeliProvider
      value={{
        query,
        setQuery,
        items,
        setItems,
        categories,
        setCategories,
        loading,
        setLoading,
        id,
        setId,
        item,
        setItem
      }}
    >
      <NavBar handleSearch={handleSearch} />

      <Main>
        {categories.length > 0 && <Categories />}

        {loading && <Loading />}

        <Switch>
          <Route exact path="/items">
            <List />
          </Route>

          <Route path="/items/:id">{Object.keys(item).length > 0 && <Detail />}</Route>

          <Route path="*">
            <List />
          </Route>
        </Switch>
      </Main>
    </MeliProvider>
  );
};

export default withRouter(App);

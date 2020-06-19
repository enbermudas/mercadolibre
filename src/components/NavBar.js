import React, { useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MeliContext from '../store';

import LogoSrc from '../assets/Logo_ML.png';
import Logo2XSrc from '../assets/Logo_ML@2x.png.png';
import IconSrc from '../assets/ic_Search.png';
import Icon2XSrc from '../assets/ic_Search@2x.png.png';

const Header = styled.header.attrs({
  'data-testid': 'header',
  role: 'banner'
})`
  display: block;
  overflow: hidden;
  background-color: #ffe600;
`;

const Nav = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
`;

const Logo = styled.img.attrs({
  'data-testid': 'navbar-logo',
  alt: 'Logo MercadoLibre',
  src: LogoSrc,
  srcSet: Logo2XSrc
})`
  height: 34px;
  margin: 15px 0 0 15px;
`;

const Input = styled.input.attrs({
  'data-testid': 'search-input',
  type: 'text',
  placeholder: 'Nunca dejes de buscar'
})`
  width: 100%;
  height: 34px;
  margin: 10px 0 10px 15px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 18px;
  color: #333333;
  padding: 4px 10px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.75;
  }
`;

const Button = styled.button.attrs({
  'data-testid': 'search-button'
})`
  background-color: #eeeeee;
  margin: 10px 15px 0 0;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 52px;
  height: 42px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background linear 0.25s;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Icon = styled.img.attrs({
  'data-testid': 'search-icon',
  alt: 'Icono de Búsqueda',
  src: IconSrc,
  srcSet: Icon2XSrc
})`
  width: 50%;
`;

const NavBar = () => {
  const { query, setQuery, setList } = useContext(MeliContext);

  const handleSearch = async () => {
    const { data } = await axios.get('/api/v1/items/', { params: { q: query } });
    setList(data);
  };

  return (
    <Header>
      <Nav>
        <Logo />

        <Input value={query} onChange={(e) => setQuery(e.target.value)} />

        <Button onClick={() => handleSearch()}>
          <Icon />
        </Button>
      </Nav>
    </Header>
  );
};

export default NavBar;

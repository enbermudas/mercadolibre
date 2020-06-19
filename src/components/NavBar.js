import React from 'react';
import styled from 'styled-components';

const Header = styled.header.attrs({
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
  alt: 'Logo MercadoLibre',
  src: 'img/Logo_ML.png',
  srcSet: 'img/Logo_ML@2x.png.png'
})`
  height: 34px;
  margin: 15px 0 0 15px;
`;

const Input = styled.input.attrs({
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

const Button = styled.button.attrs({})`
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
  alt: 'Icono de Busqueda',
  src: 'img/ic_Search.png',
  srcSet: 'img/ic_Search@2x.png.png'
})`
  width: 50%;
`;

const NavBar = () => {
  return (
    <Header>
      <Nav>
        <Logo />

        <Input />

        <Button>
          <Icon />
        </Button>
      </Nav>
    </Header>
  );
};

export default NavBar;

import React from 'react';
import styled from 'styled-components';

// Source: https://projects.lukehaas.me/css-loaders/
const Spinner = styled.div.attrs({
  'data-testid': 'loading'
})`
  border-radius: 50%;
  width: 10em;
  height: 10em;
  margin: calc(50vh - 15%) auto 0;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(255, 255, 255, 0.5);
  border-right: 1.1em solid rgba(255, 255, 255, 0.5);
  border-bottom: 1.1em solid rgba(255, 255, 255, 0.5);
  border-left: 1.1em solid #ffe600;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load 1.1s infinite linear;
  animation: load 1.1s infinite linear;

  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <Spinner>Cargando...</Spinner>;
};

export default Loading;

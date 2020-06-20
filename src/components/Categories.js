import React, { useContext } from 'react';
import styled from 'styled-components';
import MeliContext from '../store';

const List = styled.ol`
  max-width: 1200px;
  padding-top: 16px;
  margin: 0 auto;
  list-style-type: none;
`;

const ListItem = styled.li`
  font-size: 14px;
  color: #999999;
  display: inline-block;

  &:last-of-type {
    font-weight: bolder;
  }
`;

const Chevron = styled.span`
  color: #999999;
  font-size: 14px;
  margin: 0 5px;
`;

const Categories = () => {
  const { categories } = useContext(MeliContext);
  const lastIndex = categories.length - 1;

  return (
    <List data-testid="categories-list">
      {categories.map((category, index) => (
        <React.Fragment key={index}>
          <ListItem>{category}</ListItem>
          {lastIndex !== index && <Chevron>{'>'}</Chevron>}
        </React.Fragment>
      ))}
    </List>
  );
};

export default Categories;

import React, { useContext } from 'react';
import styled from 'styled-components';
import MeliContext from '../store';

const List = styled.ol.attrs({
  'data-testid': 'categories-list'
})`
  max-width: 1200px;
  padding: 16px 0;
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
  const { list } = useContext(MeliContext);
  const { categories } = list;
  const lastIndex = categories.length - 1;

  return (
    <List>
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

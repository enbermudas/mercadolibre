import React, { useContext } from 'react';
import { default as InfiniteList } from '@researchgate/react-intersection-list';
import styled from 'styled-components';
import MeliContext from '../store';

// components
import Item from '../components/Item';

const Section = styled.section.attrs({
  'test-dataid': 'list-section'
})`
  box-sizing: border-box;
  background: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border-radius: 4px;
`;

const OrderedList = styled.ol.attrs({
  'test-dataid': 'items-list'
})`
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: relative;
`;

const Divider = styled.div`
  width: calc(100% - 32px);
  height: 1px;
  background: #eeeeee;
  margin: 0 auto;
`;

const List = () => {
  const { list } = useContext(MeliContext);
  const { items } = list;
  const lastIndex = items.length - 1;

  const itemsRenderer = (items, ref) => (
    <Section>
      <OrderedList ref={ref}>{items}</OrderedList>
    </Section>
  );

  const renderItem = (index, key) => (
    <React.Fragment key={key}>
      <Item data={items[index]} />
      {lastIndex !== key && <Divider />}
    </React.Fragment>
  );

  return (
    <InfiniteList
      itemCount={items.length}
      itemsRenderer={itemsRenderer}
      renderItem={renderItem}
    />
  );
};

export default List;

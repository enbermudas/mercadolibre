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
  margin: 16px auto;
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

const NoResults = styled.div`
  width: auto;
  text-align: center;
`;

const Heading = styled.h1.attrs({
  'data-testid': 'no-results-heading',
  role: 'heading'
})`
  color: #999999;
  margin-bottom: 0;
`;

const SubHeading = styled.h2.attrs({
  'data-testid': 'no-results-subheading',
  role: 'subheading'
})`
  color: #999999;
  margin: 0;
`;

const List = () => {
  const { items, loading } = useContext(MeliContext);
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

  return items.length ? (
    <InfiniteList
      itemCount={items.length}
      itemsRenderer={itemsRenderer}
      renderItem={renderItem}
    />
  ) : (
    !loading && (
      <NoResults>
        <Heading>Sin resultados...</Heading>
        <SubHeading>¡Realiza una búsqueda!</SubHeading>
      </NoResults>
    )
  );
};

export default List;

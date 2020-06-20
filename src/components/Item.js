import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IcShipping from '../assets/ic_shipping.png';
import IcShipping2x from '../assets/ic_shipping@2x.png.png';

const ListItem = styled.li`
  box-sizing: border-box;
  height: 212px;
  padding: 16px;
  display: grid;
  grid-template-columns: 180px auto;
  cursor: pointer;
  transition: background linear 0.25s;

  &:hover {
    background: #fbfbfb;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    height: 332px;
  }
`;

const Picture = styled.img`
  width: 180px;
  border-radius: 4px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

const Content = styled.div`
  margin-left: 16px;
  width: auto;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 64px;
  padding-top: 16px;
`;

const BottomSection = styled.div`
  margin-top: 32px;
`;

const Price = styled.div`
  font-size: 24px;
  position: relative;
  display: inline-block;
  color: #333333;
`;

const Address = styled.div`
  font-size: 12px;
  color: #999999;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 18px;
  width: auto;
  display: inline-block;
  color: #333333;
`;

const Shipping = styled.img.attrs({
  'data-testid': 'shipping-icon',
  alt: 'Shipping Icon',
  src: IcShipping,
  srcSet: IcShipping2x
})`
  width: 15px;
  margin-left: 6px;
`;

const Item = ({ data }) => {
  const { address, free_shipping, picture, price, title } = data;

  return (
    <ListItem>
      <Picture src={picture} />
      <Content>
        <TopSection>
          <div>
            <Price>
              {price.currency} {price.amount}
            </Price>

            {free_shipping && <Shipping />}
          </div>
          <Address>{address}</Address>
        </TopSection>

        <BottomSection>
          <Title>{title}</Title>
        </BottomSection>
      </Content>
    </ListItem>
  );
};

Item.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.exact({
      amount: PropTypes.number,
      currency: PropTypes.string,
      decimals: PropTypes.number
    }),
    picture: PropTypes.string,
    condition: PropTypes.string,
    address: PropTypes.string,
    free_shipping: PropTypes.bool
  })
};

export default Item;

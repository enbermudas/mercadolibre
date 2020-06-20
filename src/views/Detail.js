import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import MeliContext from '../store';

const Section = styled.section.attrs({
  'test-dataid': 'item-section'
})`
  box-sizing: border-box;
  background: #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 4px;
  display: grid;
  grid-template-columns: 680px auto;

  @media (max-width: 600px) {
    display: block;
  }
`;

const LeftSection = styled.div.attrs({
  'data-testid': 'left-section'
})`
  width: auto;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Picture = styled.img.attrs({
  'data-testid': 'picture'
})`
  border-radius: 4px;

  @media (max-width: 600px) {
    max-width: 300px;
    max-height: 300px;
  }
`;

const RightSection = styled.div.attrs({
  'data-testid': 'right-section'
})`
  padding-top: 32px;
  padding-right: 32px;

  @media (max-width: 600px) {
    padding-left: 32px;
  }
`;

const Heading = styled.div.attrs({
  'data-testid': 'item-heading'
})`
  width: auto;
`;

const Status = styled.div.attrs({
  'data-testid': 'item-status'
})`
  font-size: 14px;
`;

const Title = styled.div.attrs({
  'data-testid': 'item-title',
  role: 'heading'
})`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;

const Cost = styled.div.attrs({
  'data-testid': 'item-cost'
})`
  font-size: 46px;
  margin-top: 32px;

  @media (max-width: 600px) {
    font-size: 38px;
    text-align: center;
  }
`;

const Decimals = styled.sup.attrs({
  'data-testid': 'item-cost-decimals'
})`
  font-size: 23px;
`;

const BuyButton = styled.button.attrs({
  'data-testid': 'buy-button'
})`
  background: #3483fa;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  text-align: center;
  width: 220px;
  font-size: 14px;
  height: 48px;
  cursor: pointer;
  margin-top: 32px;
  transition: background linear 0.25s;

  &:hover {
    background: #4d94ff;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Description = styled.div.attrs({
  'data-testid': 'item-description'
})`
  padding-left: 32px;
  padding-bottom: 32px;

  @media (max-width: 600px) {
    margin-top: 32px;
  }
`;

const DescHeading = styled.div.attrs({
  'data-testid': 'item-description-heading',
  role: 'heading'
})`
  font-size: 28px;
  padding-bottom: 32px;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Paragraph = styled.p.attrs({
  'data-testid': 'item-description-paragraph'
})`
  color: #999999;
  font-size: 16px;

  @media (max-width: 600px) {
    margin-right: 32px;
    word-wrap: break-word;
  }
`;

const conditions = {
  new: 'Nuevo',
  not_specified: 'Sin especificar',
  used: 'Usado'
};

const Detail = () => {
  const { item } = useContext(MeliContext);
  const { id, picture, condition, sold_quantity, title, price, description } = item;

  const [width, height] = picture.size.split('x');

  const status = `${conditions[condition]} - ${sold_quantity} vendido${
    sold_quantity > 0 && 's'
  }`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="price" content={`${price.amount}.${price.decimals}`} />
      </Helmet>

      <Section id={id}>
        <LeftSection>
          <Picture src={picture.url} alt={picture.id} width={width} height={height} />
        </LeftSection>
        <RightSection>
          <Heading>
            <Status>{status}</Status>
            <Title>{title}</Title>
          </Heading>

          <Cost>
            {price.currency} {price.amount}
            <Decimals>{price.decimals}</Decimals>
          </Cost>

          <BuyButton>Comprar</BuyButton>
        </RightSection>

        <Description>
          <DescHeading>Descripción del producto</DescHeading>
          <Paragraph>{description}</Paragraph>
        </Description>
      </Section>
    </>
  );
};

export default Detail;

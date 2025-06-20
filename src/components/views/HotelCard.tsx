'use client';

import styled from 'styled-components';

const Card = styled.div`
  width: 260px;
  height: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Content = styled.div`
  padding: 12px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Address = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 15.35px;
  color: #8D4B38;
  margin: 0 0 6px 0;
`;

const HotelName = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25.59px;
  color: #222222;
  margin: 0 0 6px 0;
`;

const Price = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 15.35px;
  color: #222222;
  margin-top: auto;
`;

interface HotelCardProps {
  imageSrc: string;
  address: string;
  name: string;
  price: string; // sans "par nuit", ajouté en dur dans le composant
}

export default function HotelCard({ imageSrc, address, name, price }: HotelCardProps) {
  return (
    <Card>
      <Image src={imageSrc} alt={name} />
      <Content>
        <Address>{address}</Address>
        <HotelName>{name}</HotelName>
        <Price>{price} par nuit</Price>
      </Content>
    </Card>
  );
}
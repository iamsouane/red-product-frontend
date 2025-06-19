// src/components/views/HotelCard.tsx
'use client';

import styled from 'styled-components';

const Card = styled.div`
  width: 280px;
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
  font-size: 13px;
  color: #666;
  margin: 4px 0;
`;

const HotelName = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #000;
  margin: 4px 0;
`;

const Price = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #444;
  margin-top: 8px;
`;

interface HotelCardProps {
  imageSrc: string;
  address: string;
  name: string;
  price: string;
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
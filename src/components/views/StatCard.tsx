'use client';

import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
  flex: 1;
  min-width: 250px;
`;

const IconCircle = styled.div<{ color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
`;

const Number = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const Label = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #555;
`;

const SubText = styled.p`
  font-size: 13px;
  color: #888;
  margin-top: 6px;
`;

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string;
}

export default function StatCard({ icon, number, label, color }: StatCardProps) {
  return (
    <Card>
      <IconCircle color={color}>{icon}</IconCircle>
      <InfoContainer>
        <TitleRow>
          <Number>{number}</Number>
          <Label>{label}</Label>
        </TitleRow>
        <SubText>Je ne sais pas quoi mettre</SubText>
      </InfoContainer>
    </Card>
  );
}
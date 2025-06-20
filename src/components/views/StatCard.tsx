'use client';

import styled from 'styled-components';

const Card = styled.div`
  width: 350px;            /* largeur fixe selon ton exemple */
  height: 106px;           /* hauteur fixe */
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  gap: 16px;
  align-items: center;
  box-shadow: 0px 0px 1.33px 0px #00000026;
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
  font-family: 'Roboto', sans-serif;
  font-weight: 300;           /* font-weight 300 pour le "125" selon Figma */
  font-size: 32px;            /* taille 32px */
  line-height: 35.19px;
  color: #000000DE;
  margin: 0;
`;

const Label = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;           /* 300 selon Figma pour "Emails" */
  font-size: 17.06px;
  line-height: 18.77px;
  color: #000000DE;
`;

const SubText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16.8px;
  line-height: 25.2px;
  color: #000000DE;
  opacity: 0.6;
  margin-top: 6px;
`;

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  color: string;
  subText?: string;
}

export default function StatCard({ icon, number, label, color, subText = "Je ne sais pas quoi mettre" }: StatCardProps) {
  return (
    <Card>
      <IconCircle color={color}>{icon}</IconCircle>
      <InfoContainer>
        <TitleRow>
          <Number>{number}</Number>
          <Label>{label}</Label>
        </TitleRow>
        {subText && <SubText>{subText}</SubText>}
      </InfoContainer>
    </Card>
  );
}
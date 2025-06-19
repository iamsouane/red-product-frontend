'use client';

import styled from 'styled-components';

const MainContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #fff;
  display: flex;
  flex-direction: column;   
  align-items: flex-start;
  margin-top: 10px;
`;

const WelcomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #000;
`;

export const WelcomeText = styled.p`
  font-size: 16px;
  color: #444;
  margin: 0;
`;

interface MainContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function MainContainer({ title, children }: MainContainerProps) {
  return (
    <MainContent>
      <WelcomeTitle>{title}</WelcomeTitle>
      {children}
    </MainContent>
  );
}
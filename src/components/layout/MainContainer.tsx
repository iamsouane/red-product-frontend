'use client';

import styled from 'styled-components';

const MainContent = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const CreateButton = styled.button`
  padding: 10px 20px;
  background: transparent;
  border: 2px solid #000;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
`;

interface MainContainerProps {
  title: string;
  count?: number;
  onCreate?: () => void;
  children?: React.ReactNode;
}

export default function MainContainer({
  title,
  count,
  onCreate,
  children
}: MainContainerProps) {
  return (
    <MainContent>
      <HeaderRow>
        <Title>
          {title} {count !== undefined && <span> {count}</span>}
        </Title>
        {onCreate && <CreateButton onClick={onCreate}>+ Créer un nouveau hôtel</CreateButton>}
      </HeaderRow>
      {children}
    </MainContent>
  );
}

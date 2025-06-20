'use client';

import styled from 'styled-components';

const MainContent = styled.div`
  width: 100%;
  padding: 20px 47.38px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const WelcomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 30px;
`;

const MainHeading = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 32px;
  line-height: 35.19px;
  color: #000000de;
  margin: 0;
`;

const SubHeading = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16.8px;
  line-height: 25.2px;
  color: #000000de;
  opacity: 0.6;
  margin: 0;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
`;

const CreateButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 17px 23px;
  background: transparent;
  border: 1px solid #aeaeae;
  color: #000;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
  border-radius: 14px;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #000;
    color: #fff;
    border-color: #000;
  }
`;

interface MainContainerProps {
  title: string;
  count?: number;
  onCreate?: () => void;
  showWelcome?: boolean;
  children?: React.ReactNode;
}

export default function MainContainer({
  title,
  count,
  onCreate,
  showWelcome = false,
  children,
}: MainContainerProps) {
  return (
    <MainContent>
      {showWelcome && (
        <WelcomeBlock>
          <MainHeading>Bienvenue sur RED Product</MainHeading>
          <SubHeading>Lorem ipsum dolor sit amet consectetur</SubHeading>
        </WelcomeBlock>
      )}

      <HeaderRow>
        <SectionTitle>
          {title} {count !== undefined && <span>({count})</span>}
        </SectionTitle>
        {onCreate && (
          <CreateButton onClick={onCreate}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Créer un nouveau hôtel
          </CreateButton>
        )}
      </HeaderRow>

      {children}
    </MainContent>
  );
}
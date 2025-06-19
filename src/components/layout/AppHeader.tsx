'use client';

import styled from 'styled-components';
import Image from 'next/image';

interface AppHeaderProps {
  title: string;
}

const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: #f3f3f3;
  padding: 8px 12px;
  border-radius: 25px;
  gap: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
`;

const NotificationWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background: #FFD964;
  color: #000;
  font-size: 10px;
  font-weight: bold;
  padding: 2px 6px;
  border-radius: 10px;
`;

const Icon = styled.div`
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: #000;
  }
`;

const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export default function AppHeader({ title }: AppHeaderProps) {
  return (
    <HeaderContainer>
      <Title>{title}</Title>

      <RightSection>
        <SearchBox>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <SearchInput type="text" placeholder="Rechercher..." />
        </SearchBox>

        <NotificationWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z" />
          </svg>

          <NotificationBadge>3</NotificationBadge>
        </NotificationWrapper>

        <ProfileImage src="/img/iamsouane.jpeg" alt="Profil" width={36} height={36} />

        <Icon title="Déconnexion">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
        </Icon>
      </RightSection>
    </HeaderContainer>
  );
}
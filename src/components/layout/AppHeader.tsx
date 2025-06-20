'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 

interface AppHeaderProps {
  title: string;
}

const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  box-shadow:
    0px 1.33px 0px 0px #00000008,
    0px 2.67px 2.67px 0px #00000008;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 26.66px;
  font-weight: 500;
  line-height: 74.66px;
  color: #000000de;
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  height: 34px;
  padding: 0 12px;
  background: #ffffff;
  border: 1.33px solid #78828c21;
  border-radius: 666.56px;
  gap: 8px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  flex: 1;
`;

const NotificationWrapper = styled.div`
  position: relative;
  cursor: pointer;
  font-family: 'Material Icons';
  font-weight: 400;
  font-size: 24px;
  color: #000000de;
  line-height: 24px;
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -15px;
  background: #FCC100;
  color: #000;
  font-size: 10px;
  font-weight: bold;
  width: 18px;
  height: 18px;
  border-radius: 4.27px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  position: relative;
  width: 42.66px;
  height: 42.66px;
`;

const ProfileImage = styled(Image)`
  width: 42.66px;
  height: 42.66px;
  border-radius: 666.56px;
  object-fit: cover;
`;

const StatusDot = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 13.33px;
  height: 13.33px;
  background: #00ff92;
  border: 2.67px solid #ffffff;
  border-radius: 50%;
`;

const Icon = styled.div`
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    color: #000000de;
  }
`;

export default function AppHeader({ title }: AppHeaderProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Ici tu peux ajouter la logique de nettoyage (ex: clear token)
    router.push('/auth/login');
  };

  return (
    <HeaderContainer>
      <Title>{title}</Title>

      <RightSection>
        <SearchBox>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <SearchInput type="text" placeholder="Rechercher..." />
        </SearchBox>

        <NotificationWrapper>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"
            />
          </svg>
          <NotificationBadge>3</NotificationBadge>
        </NotificationWrapper>

        <ProfileWrapper>
          <ProfileImage src="/img/iamsouane.jpeg" alt="Profil" width={42.66} height={42.66} />
          <StatusDot />
        </ProfileWrapper>

        <Icon title="Déconnexion" onClick={handleLogout} role="button" tabIndex={0} aria-label="Déconnexion">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2h4a2 2 0 012 2v1"
            />
          </svg>
        </Icon>
      </RightSection>
    </HeaderContainer>
  );
}
'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandHeader from '@/components/views/BrandHeader';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 290px;
  height: 100vh;
  background: #55595c;
  mix-blend-mode: multiply;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 25px;
  box-sizing: border-box;
  z-index: 999;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
`;

const NavTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16.8px;
  height: 48px;
  color: #ffffff;
  padding-left: 21.33px;
  line-height: 48px;
  margin: 0 0 15px 0;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 26px;
  height: 48px;
  padding: 12px 25px;
  border-radius: 8px;
  color: ${(props) => (props.$active ? '#55595C' : '#FFFFFF')};
  background: ${(props) => (props.$active ? '#FFFFFF' : 'transparent')};
  font-family: 'Roboto', sans-serif;
  font-size: 18.66px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;

  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => (props.$active ? '#55595C' : 'currentColor')};
    stroke: ${(props) => (props.$active ? '#55595C' : 'currentColor')};
    transition: fill 0.25s ease, stroke 0.25s ease;
  }

  &:hover {
    background: #ffffff;
    color: #55595c;

    svg {
      fill: #55595c !important;
      stroke: #55595c !important;
    }
  }
`;

const BottomSection = styled.div`
  margin-top: auto;
`;

const Divider = styled.div`
  height: 1px;
  background: #444;
  margin: 30px 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 53.33px;
  height: 53.33px;
`;

const Avatar = styled(Image)`
  border-radius: 26.66px;
  object-fit: cover;
  width: 53.33px;
  height: 53.33px;
`;

const StatusDot = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 13.33px;
  height: 13.33px;
  background: #00ff92;
  border: 2.67px solid #ffffff;
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18.66px;
  line-height: 28px;
  margin: 0;
  color: #ffffffde;
`;

const Status = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
`;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <div>
        <BrandHeader />

        <Nav>
          <NavTitle>Principal</NavTitle>

          <NavItem href="/dashboard" $active={pathname === '/dashboard'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
            </svg>
            Dashboard
          </NavItem>

          <NavItem href="/hotels" $active={pathname === '/hotels'}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 14H4m6.5 3L8 20m5.5-3 2.5 3M4.88889 17H19.1111c.4909 0 .8889-.4157.8889-.9286V4.92857C20 4.41574 19.602 4 19.1111 4H4.88889C4.39797 4 4 4.41574 4 4.92857V16.0714c0 .5129.39797.9286.88889.9286ZM13 14v-3h4v3h-4Z"
              />
            </svg>
            Liste des hôtels
          </NavItem>
        </Nav>
      </div>

      <BottomSection>
        <Divider />
        <ProfileInfo>
          <AvatarWrapper>
            <Avatar src="/img/iamsouane.jpeg" alt="PhotoDeProfil" width={53.33} height={53.33} />
            <StatusDot />
          </AvatarWrapper>
          <Info>
            <Name>Ismaïla SOUANE</Name>
            <Status>En ligne</Status>
          </Info>
        </ProfileInfo>
      </BottomSection>
    </SidebarContainer>
  );
}
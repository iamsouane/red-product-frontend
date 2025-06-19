'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarContainer = styled.div`
  width: 260px;
  background: #121212;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 20px;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const Brand = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const NavTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #aaa;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

// NavItem avec style conditionnel selon prop $active
const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => (props.$active ? '#121212' : '#fff')};
  background: ${(props) => (props.$active ? '#fff' : 'transparent')};
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const BottomSection = styled.div`
  margin-bottom: 100px;
`;

const Divider = styled.div`
  height: 1px;
  background: #444;
  margin: 20px 0;
`;

const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled(Image)`
  border-radius: 50%;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: 600;
`;

const Status = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #6fcf97;
`;

const OnlineDot = styled.div`
  width: 8px;
  height: 8px;
  background: #6fcf97;
  border-radius: 50%;
`;

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <div>
        <LogoSection>
          <Logo>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white" />
              <path d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z" fill="black" fillOpacity="0.15" />
              <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white" />
            </svg>
          </Logo>
          <Brand>RED PRODUCT</Brand>
        </LogoSection>

        <Nav>
          <NavTitle>Principal</NavTitle>

          <NavItem href="/dashboard" $active={pathname === '/dashboard'}>
            <span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm14 18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4ZM5 11a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5Zm14 2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4Z" />
              </svg>
            </span>
            Dashboard
          </NavItem>

          <NavItem href="/hotels" $active={pathname === '/hotels'}>
            <span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 14H4m6.5 3L8 20m5.5-3 2.5 3M4.88889 17H19.1111c.4909 0 .8889-.4157.8889-.9286V4.92857C20 4.41574 19.602 4 19.1111 4H4.88889C4.39797 4 4 4.41574 4 4.92857V16.0714c0 .5129.39797.9286.88889.9286ZM13 14v-3h4v3h-4Z"
                />
              </svg>
            </span>
            Liste des hôtels
          </NavItem>
        </Nav>
      </div>

      <BottomSection>
        <Divider />
        <ProfileInfo>
          <Avatar src="/img/iamsouane.jpeg" alt="PhotoDeProfil" width={40} height={40} />
          <Info>
            <Name>Ismaïla SOUANE</Name>
            <Status>
              <OnlineDot />
              En ligne
            </Status>
          </Info>
        </ProfileInfo>
      </BottomSection>
    </SidebarContainer>
  );
}
'use client';

import styled from 'styled-components';
import {
  FaWpforms,
  FaEnvelope,
  FaUser,
  FaHotel,
  FaComments,
  FaBuilding,
} from 'react-icons/fa';

import Sidebar from '@/components/layout/Sidebar';
import AppHeader from '@/components/layout/AppHeader';
import MainContainer from '@/components/layout/MainContainer';
import StatCard from '@/components/views/StatCard';
import StatsGrid from '@/components/views/StatsGrid';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f0f0f0; // Fond général plus sombre
`;

const MainLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
`;

const Paragraph = styled.p`
  font-size: 16px;
  color: #444;
  margin-top: 10px;
`;

const CardSection = styled.div`
  padding: 0 40px 40px; // Espace autour des cards
`;

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainLayout>
        <AppHeader />

        <MainContainer title="Bienvenue sur RED PRODUCT">
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, natus.
          </Paragraph>
        </MainContainer>

        <CardSection>
          <StatsGrid>
            <StatCard
              icon={<FaWpforms color="#fff" />}
              number="125"
              label="Formulaires"
              color="#7E57C2"
            />
            <StatCard
              icon={<FaComments color="#fff" />}
              number="40"
              label="Messages"
              color="#66BB6A"
            />
            <StatCard
              icon={<FaUser color="#fff" />}
              number="600"
              label="Utilisateurs"
              color="#FFEB3B"
            />
            <StatCard
              icon={<FaEnvelope color="#fff" />}
              number="25"
              label="E-mails"
              color="#EF5350"
            />
            <StatCard
              icon={<FaHotel color="#fff" />}
              number="40"
              label="Hôtels"
              color="#5E35B1"
            />
            <StatCard
              icon={<FaBuilding color="#fff" />}
              number="02"
              label="Entités"
              color="#42A5F5"
            />
          </StatsGrid>
        </CardSection>
      </MainLayout>
    </DashboardContainer>
  );
}
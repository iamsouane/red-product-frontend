'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Sidebar from '@/components/layout/Sidebar';
import AppHeader from '@/components/layout/AppHeader';
import MainContainer from '@/components/layout/MainContainer';
import StatsGrid from '@/components/views/StatsGrid';
import HotelCard from '@/components/views/HotelCard';

const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  background: #f0f0f0;
`;

const MainLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

interface Hotel {
  imageSrc: string;
  address: string;
  name: string;
  price: string;
}

export default function HotelsPage() {
  const router = useRouter();

  const [hotels, setHotels] = useState<Hotel[]>([
    {
      imageSrc: '/img/terou-bi.jpg',
      address: 'Boulevard Martin Luther King Dakar, 11500',
      name: 'Hôtel Terrou-Bi',
      price: '25.000 XOF',
    },
    {
      imageSrc: '/img/king-fahd.png',
      address: 'Rte des Almadies, Dakar',
      name: 'King Fahd Palace',
      price: '20.000 XOF',
    },
    {
      imageSrc: '/img/radisson.jpg',
      address: 'Rte de la Corniche O, Dakar 16868',
      name: 'Radisson Blu Hotel',
      price: '22.000 XOF',
    },
    {
      imageSrc: '/img/pullman.jpg',
      address: 'Place de l\'Independance, 10 Rue PL 29, Dakar',
      name: 'Pullman Dakar Teranga',
      price: '30.000 XOF',
    },
    {
      imageSrc: '/img/lac-rose.jpg',
      address: 'Lac Rose, Dakar',
      name: 'Hôtel Lac Rose',
      price: '25.000 XOF',
    },
    {
      imageSrc: '/img/saly.jpg',
      address: 'Mbour, Sénégal',
      name: 'Hôtel Saly',
      price: '20.000 XOF',
    },
    {
      imageSrc: '/img/palm.jpg',
      address: 'BP64, Saly 23000',
      name: 'Palm Beach Resort & Spa',
      price: '22.000 XOF',
    },
    {
      imageSrc: '/img/pullman-2.jpg',
      address: 'Place de l\'Independance, 10 Rue PL 29, Dakar',
      name: 'Pullman Dakar Teranga',
      price: '30.000 XOF',
    },
  ]);

  const handleCreateHotel = () => {
    router.push('/hotels/new');
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainLayout>
        <AppHeader title="Liste des hôtels" />
        <MainContainer title="Hôtels" count={hotels.length} onCreate={handleCreateHotel} />
        <StatsGrid>
          {hotels.map((hotel, index) => (
            <HotelCard
              key={index}
              imageSrc={hotel.imageSrc}
              address={hotel.address}
              name={hotel.name}
              price={hotel.price}
            />
          ))}
        </StatsGrid>
      </MainLayout>
    </PageContainer>
  );
}
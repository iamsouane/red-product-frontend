'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

import Sidebar from '@/components/layout/Sidebar';
import AppHeader from '@/components/layout/AppHeader';
import MainContainer from '@/components/layout/MainContainer';
import StatsGrid from '@/components/views/StatsGrid';
import HotelCard from '@/components/views/HotelCard';



const PageContainer = styled.div`
display: flex;
  background: #f0f0f0;`;

const MainLayout = styled.div`
  margin-left: 290px; /* Décalé à droite du sidebar */
  width: calc(100% - 290px);
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  min-height: 100vh;
`;

interface Hotel {
  _id: string;
  imageUrl: string;
  address: string;
  name: string;
  price: string;
}

export default function HotelsPage() {
  const router = useRouter();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHotels = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels`);
      if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);
      const data = await res.json();
      setHotels(data);
    } catch (error) {
      console.error('Erreur de chargement des hôtels', error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchHotels();
  }, []);

  const handleCreateHotel = () => {
    router.push('/hotels/new');
  };

  return (
    <PageContainer>
      <Sidebar /> {/* Rendu fixe */}
      <MainLayout>
        <AppHeader title="Liste des hôtels" />
        <MainContainer title="Hôtels" count={hotels.length} onCreate={handleCreateHotel} />
        <StatsGrid columns={4}>
          {loading ? (
            <p>Chargement...</p>
          ) : (
            hotels.map((hotel) => (
              <HotelCard
                key={hotel._id}
                imageSrc={hotel.imageUrl}
                address={hotel.address}
                name={hotel.name}
                price={hotel.price}
              />
            ))
          )}
        </StatsGrid>
      </MainLayout>
    </PageContainer>
  );
}

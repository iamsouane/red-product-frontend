'use client';

import styled from 'styled-components';
import TextInput from '@/components/forms/TextInput';
import PhotoUpload from '@/components/forms/PhotoUpload';
import SelectInput from '@/components/forms/SelectInput';
import { useState } from 'react';

const PageContainer = styled.div`
  padding: 40px 20px;
  background: #f5f5f5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const WhiteBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const Header = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 24px;  /* espace augmenté */
  cursor: pointer;
  color: #000;
`;

const DashedLine = styled.hr`
  border: none;
  border-top: 2px dashed #000;
  margin: 0 0 40px 0; /* espace après la ligne */
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HalfInput = styled.div`
  flex: 1;
`;

const PhotoLabel = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 30px 0 10px 0;
  color: #000;
`;

const SubmitButton = styled.button`
  background: #000;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 30px;
  float: right;
`;

const currencyOptions = [
  { value: 'XOF', label: 'F XOF' },
  { value: 'EUR', label: 'Euro' },
  { value: 'USD', label: 'Dollar' },
];

export default function NewHotelPage() {
  const [photo, setPhoto] = useState<File | null>(null);

  const handlePhotoChange = (file: File | null) => {
    setPhoto(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Hôtel enregistré !');
  };

  return (
    <PageContainer>
      <WhiteBox>
        <Header onClick={() => history.back()}>&larr; Créer un nouveau hôtel</Header>

        <DashedLine />

        <form onSubmit={handleSubmit}>
          <Row>
            <HalfInput>
              <TextInput id="hotelName" label="Nom de l'hôtel" placeholder="CAP Marniane" required />
            </HalfInput>
            <HalfInput>
              <TextInput id="address" label="Adresse" placeholder="Les îles du Saloum, Mar Lodj" required />
            </HalfInput>
          </Row>

          <Row>
            <HalfInput>
              <TextInput id="email" label="E-mail" type="email" placeholder="information@gmail.com" required />
            </HalfInput>
            <HalfInput>
              <TextInput id="phone" label="Numéro de téléphone" type="tel" placeholder="+221 77 777 77 77" required />
            </HalfInput>
          </Row>

          <Row>
            <HalfInput>
              <TextInput
                id="price"
                label="Prix par nuit"
                type="number"
                min="0"
                step="0.01"
                placeholder="25.000 XOF"
                required
              />
            </HalfInput>
            <HalfInput>
              <SelectInput id="currency" label="Devise" options={currencyOptions} required />
            </HalfInput>
          </Row>

          <PhotoLabel>Ajouter une photo</PhotoLabel>

          <PhotoUpload onChange={handlePhotoChange} />

          <SubmitButton type="submit">Enregistrer</SubmitButton>
        </form>
      </WhiteBox>
    </PageContainer>
  );
}
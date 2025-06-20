'use client';

import styled from 'styled-components';
import TextInput from '@/components/forms/TextInput';
import PhotoUpload from '@/components/views/PhotoUpload';
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
  background: #ffffff;
  padding: 40px;
  border-radius: 11px;
  border: 1.32px solid #dddddd;
  max-width: 966px;
  width: 100%;
  height: 938px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
`;

const HeaderBox = styled.div`
  width: 884px;
  height: 121.75px;
  border-bottom: 2.65px dashed #dddddd;
  margin-bottom: 40px;
  display: flex;
  align-items: flex-start;
`;

const Header = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 21.74px;
  line-height: 34.17px;
  text-transform: uppercase;
  color: #555555;
  cursor: pointer;
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

const InputGroup = styled.div`
  width: 422px;
  height: 91px;
  background: #ffffff;
  border: 1.32px  #dddddd;
  border-radius: 14px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PhotoLabel = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18.53px;
  line-height: 27.79px;
  margin: 30px 0 10px 0;
  color: #555555;
`;

const SubmitButton = styled.button`
  background: #555555;
  color: #fff;
  padding: 18px 44px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 22.23px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  margin-top: 30px;
  float: right;
  letter-spacing: 0;
  text-transform: uppercase;

  &:hover {
    background: #444444;
  }
`;

const currencyOptions = [
  { value: 'XOF', label: 'F XOF' },
  { value: 'EUR', label: 'Euro' },
  { value: 'USD', label: 'Dollar' },
];

export default function NewHotelPage() {
  const [photo, setPhoto] = useState<File | null>(null);
  const previewUrl = photo ? URL.createObjectURL(photo) : null;

  const handlePhotoChange = (file: File | null) => {
    setPhoto(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const formData = new FormData();
    formData.append('name', (form.elements.namedItem('hotelName') as HTMLInputElement).value);
    formData.append('address', (form.elements.namedItem('address') as HTMLInputElement).value);
    formData.append('email', (form.elements.namedItem('email') as HTMLInputElement).value);
    formData.append('phone', (form.elements.namedItem('phone') as HTMLInputElement).value);
    formData.append('price', (form.elements.namedItem('price') as HTMLInputElement).value);
    formData.append('currency', (form.elements.namedItem('currency') as HTMLSelectElement).value);

    if (photo) {
      formData.append('photo', photo);
    }

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hotels`, {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('Hôtel enregistré !');
        window.location.replace('/hotels');
      } else {
        alert("Erreur lors de l’enregistrement");
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert("Erreur réseau");
      console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
    }
  };

  return (
    <PageContainer>
      <WhiteBox>
        <HeaderBox>
          <Header onClick={() => history.back()}>&larr; Créer un nouveau hôtel</Header>
        </HeaderBox>

        <form onSubmit={handleSubmit}>
          <Row>
            <HalfInput>
              <InputGroup>
                <TextInput
                  id="hotelName"
                  label="Nom de l'hôtel"
                  placeholder="CAP Marniane"
                  required
                />
              </InputGroup>
            </HalfInput>
            <HalfInput>
              <InputGroup>
                <TextInput
                  id="address"
                  label="Adresse"
                  placeholder="Les îles du Saloum, Mar Lodj"
                  required
                />
              </InputGroup>
            </HalfInput>
          </Row>

          <Row>
            <HalfInput>
              <InputGroup>
                <TextInput
                  id="email"
                  label="E-mail"
                  type="email"
                  placeholder="information@gmail.com"
                  required
                />
              </InputGroup>
            </HalfInput>
            <HalfInput>
              <InputGroup>
                <TextInput
                  id="phone"
                  label="Numéro de téléphone"
                  type="tel"
                  placeholder="+221 77 777 77 77"
                  required
                />
              </InputGroup>
            </HalfInput>
          </Row>

          <Row>
            <HalfInput>
              <InputGroup>
                <TextInput
                  id="price"
                  label="Prix par nuit"
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="25.000 XOF"
                  required
                />
              </InputGroup>
            </HalfInput>
            <HalfInput>
              <InputGroup>
                <SelectInput id="currency" label="Devise" options={currencyOptions} required />
              </InputGroup>
            </HalfInput>
          </Row>

          <PhotoLabel>Ajouter une photo</PhotoLabel>
          <PhotoUpload onChange={handlePhotoChange} previewUrl={previewUrl} />

          <SubmitButton type="submit">Enregistrer</SubmitButton>
        </form>
      </WhiteBox>
    </PageContainer>
  );
}
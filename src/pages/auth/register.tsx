'use client';

import styled from 'styled-components';
import RegisterForm from '@/components/forms/RegisterForm';
import BrandHeader from '@/components/views/BrandHeader';

const RegisterContainer = styled.div`
  min-height: 100vh;
  background: #494C4F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
`;

export default function RegisterPage() {
  return (
    <RegisterContainer>
      <BrandHeader />
      <RegisterForm />
    </RegisterContainer>
  );
}
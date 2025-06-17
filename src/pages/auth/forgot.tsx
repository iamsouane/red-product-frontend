'use client';

import styled from 'styled-components';
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import BrandHeader from '@/components/forms/BrandHeader';

const ForgotContainer = styled.div`
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
`;

export default function ForgotPage() {
  return (
    <ForgotContainer>
      <BrandHeader />
      <ForgotPasswordForm />
    </ForgotContainer>
  );
}
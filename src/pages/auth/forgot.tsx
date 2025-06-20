'use client';

import styled from 'styled-components';
import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm';
import BrandHeader from '@/components/views/BrandHeader';

const ForgotContainer = styled.div`
  min-height: 100vh;
  background: #494C4F;
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
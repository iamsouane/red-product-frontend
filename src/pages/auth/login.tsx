'use client';

import styled from 'styled-components';
import LoginForm from '@/components/forms/LoginForm';
import BrandHeader from '@/components/views/BrandHeader';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: #494C4F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 0;
`;

export default function LoginPage() {
  return (
    <LoginContainer>
      <BrandHeader />
      <LoginForm />
    </LoginContainer>
  );
}
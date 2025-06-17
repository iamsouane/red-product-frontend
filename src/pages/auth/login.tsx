'use client';

import styled from 'styled-components';
import LoginForm from '../../components/forms/LoginForm';
import BrandHeader from '../../components/forms/BrandHeader';

const LoginContainer = styled.div`
  min-height: 100vh;
  background: #121212;
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
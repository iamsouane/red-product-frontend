'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, Label, Checkbox, SignInButton } from './_FormElements';

const FormBox = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  width: 384px;
  box-shadow: 0px 1.3px 2.6px rgba(0, 0, 0, 0.1),
    0px -1.3px 0px rgba(0, 0, 0, 0.02);
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 17.07px;
  line-height: 25.6px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 30px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
  color: black;
`;

const ForgotPassword = styled.a`
  display: block;
  text-align: center;
  margin-top: 20px;
  color: #FFD964;
  font-weight: 600;
  font-size: 18px;
`;

const BottomText = styled.p`
  text-align: center;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.87);
`;

const LinkStyled = styled.a`
  color: #FFD964;
  margin-left: 5px;
  cursor: pointer;
`;

export default function LoginForm() {
  const router = useRouter();

  const handleFakeLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard');
  };

  return (
    <FormBox>
      <Title>Connectez-vous en tant que Admin</Title>
      <form onSubmit={handleFakeLogin}>
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" type="email" /* required supprimé */ />

        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" type="password" /* required supprimé */ />

        <CheckboxContainer>
          <Checkbox type="checkbox" id="remember" />
          <label htmlFor="remember">Gardez-moi connecté</label>
        </CheckboxContainer>

        <SignInButton type="submit">Se connecter</SignInButton>
      </form>

      <Link href="/auth/forgot" passHref legacyBehavior>
        <ForgotPassword>Mot de passe oublié ?</ForgotPassword>
      </Link>

      <BottomText>
        Vous n’avez pas de compte ?
        <Link href="/auth/register" passHref legacyBehavior>
          <LinkStyled>S'inscrire</LinkStyled>
        </Link>
      </BottomText>
    </FormBox>
  );
}
'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Input, Label, SignInButton } from './_FormElements';

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

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  line-height: 1.4;
  user-select: none;
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

export default function ForgotPasswordForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici tu peux appeler ton API pour le reset mot de passe
    alert("Instructions envoyées à votre email.");
    router.push('/auth/login');
  };

  return (
    <FormBox>
      <Title>Mot de passe oublié ?</Title>
      <Paragraph>
        Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.
      </Paragraph>

      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Votre e-mail</Label>
        <Input id="email" type="email" required />

        <SignInButton type="submit">Envoyer</SignInButton>
      </form>

      <BottomText>
        Vous vous souvenez de votre mot de passe ?
        <Link href="/auth/login" passHref legacyBehavior>
          <LinkStyled>Se connecter</LinkStyled>
        </Link>
      </BottomText>
    </FormBox>
  );
}
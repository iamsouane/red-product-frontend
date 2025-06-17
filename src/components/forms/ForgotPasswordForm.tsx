'use client';

import styled from 'styled-components';
import Link from 'next/link';

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
  font-size: 17px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 30px;
  line-height: 1.4;
`;

const Label = styled.label`
  font-size: 18px;
  opacity: 0.5;
  margin-top: 10px;
  display: block;
  color: rgba(0, 0, 0, 0.87);
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  margin-bottom: 20px;
  background: transparent;
  color: rgba(0, 0, 0, 0.87);
`;

const SubmitButton = styled.button`
  background: #45484b;
  color: #fff;
  width: 100%;
  padding: 15px;
  font-size: 21px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
`;

const BackLinkWrapper = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const LinkBack = styled.a`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;

  span {
    color: #ffd964;
    font-weight: 600;
  }
`;

export default function ForgotPasswordForm() {
  return (
    <>
      <FormBox>
        <Title>Mot de passe oublié ?</Title>
        <Paragraph>
          Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la
          façon de modifier votre mot de passe.
        </Paragraph>
        <form>
          <Label htmlFor="email">Votre e-mail</Label>
          <Input id="email" type="email" required />
          <SubmitButton type="submit">Envoyer</SubmitButton>
        </form>
      </FormBox>

      <BackLinkWrapper>
        <Link href="/auth/login" passHref legacyBehavior>
          <LinkBack>
            Revenir à la <span>connexion</span>
          </LinkBack>
        </Link>
      </BackLinkWrapper>
    </>
  );
}
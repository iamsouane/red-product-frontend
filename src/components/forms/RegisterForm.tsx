'use client';

import styled from 'styled-components';
import { Input, Label, Checkbox, SignInButton } from './_FormElements';
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
  font-family: Roboto, sans-serif;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 30px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  position: relative;
`;

const TermsLabel = styled.label`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  user-select: none;
`;

const StyledLink = styled.a`
  color: #FFD964;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
  text-decoration: underline;
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
  text-decoration: underline;
`;

export default function RegisterForm() {
  return (
    <FormBox>
      <Title>Inscrivez-vous en tant que Admin</Title>
      <form>
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" type="text" required />

        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" required />

        <Label htmlFor="password">Mot de passe</Label>
        <Input id="password" name="password" type="password" required />

        <CheckboxContainer>
          <Checkbox id="terms" name="terms" required />
          <TermsLabel htmlFor="terms">
            J accepte les
            <Link href="/terms" passHref legacyBehavior>
              <StyledLink> termes </StyledLink>
            </Link>
            et la
            <Link href="/privacy" passHref legacyBehavior>
              <StyledLink> politique </StyledLink>
            </Link>
          </TermsLabel>
        </CheckboxContainer>

        <SignInButton type="submit">S inscrire</SignInButton>
      </form>

      <BottomText>
        Vous avez deja un compte ?
        <Link href="/auth/login" passHref legacyBehavior>
          <LinkStyled>Se connecter</LinkStyled>
        </Link>
      </BottomText>
    </FormBox>
  );
}
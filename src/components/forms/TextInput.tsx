'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000; /* Texte noir */
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff; /* Champ blanc */
  color: #000; /* Texte noir */
  border: 1.5px solid #ccc; /* Bordure visible en tout temps */
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #555; /* Gris foncé */
  }

  &:focus {
    border-color: #000; /* Bordure noire au focus */
  }
`;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export default function TextInput({ label, id, ...props }: TextInputProps) {
  return (
    <Wrapper>
        
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
    </Wrapper>
  );
}
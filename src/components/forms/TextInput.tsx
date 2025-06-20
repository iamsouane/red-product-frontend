'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18.53px;
  font-weight: 500;
  color: #000;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  color: #000;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #555;
  }

  &:focus {
    border-color: #000;
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
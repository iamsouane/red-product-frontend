'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
`;

const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 18.53px;
  font-weight: 500;
  color: #000;
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 16px;
  background-color: #fff;
  color: #000;
  appearance: none; /* remove native arrow */
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    border-color: #000;
  }
`;

const Chevron = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 6px;
  background: #4B5563;
  border-radius: 1px;
  clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
  pointer-events: none;
`;

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

export default function SelectInput({ label, id, options, ...props }: SelectInputProps) {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <SelectWrapper>
        <Select id={id} {...props}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
        <Chevron />
      </SelectWrapper>
    </Wrapper>
  );
}
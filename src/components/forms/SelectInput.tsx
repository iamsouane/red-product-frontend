'use client';

import styled from 'styled-components';

const Label = styled.label`
  font-size: 16px;
  color: #000;
  margin-bottom: 6px;
  display: block;
  font-weight: 600;
`;

const Select = styled.select`
  width: 100%;
  border: 1.5px solid #ccc;
  border-radius: 6px;
  padding: 10px 12px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  color: #000;

  &:focus {
    border-color: #000;
  }
`;

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  id: string;
  options: { value: string; label: string }[];
}

export default function SelectInput({ label, id, options, ...props }: SelectInputProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <Label htmlFor={id}>{label}</Label>
      <Select id={id} {...props}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
}
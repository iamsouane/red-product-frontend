'use client';

import styled from 'styled-components';

const UploadBox = styled.label`
  width: 100%;
  height: 160px;
  border: 1px solid #aaa;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #666;
  font-weight: 600;
  font-size: 16px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const SvgIcon = () => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#666"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
  </svg>
);

interface PhotoUploadProps {
  onChange?: (file: File | null) => void;
}

export default function PhotoUpload({ onChange }: PhotoUploadProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange?.(file);
  };

  return (
    <UploadBox htmlFor="photo-upload">
      <SvgIcon />
      Ajouter une photo
      <HiddenInput
        type="file"
        id="photo-upload"
        accept="image/*"
        onChange={handleChange}
      />
    </UploadBox>
  );
}
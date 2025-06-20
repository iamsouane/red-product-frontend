import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadGroup = styled.div`
  width: 874px;
  height: 274.7px;
  border-radius: 14px;
  border: 1.3px solid #dddddd;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  padding: 20px;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
`;

const TextAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555555;
  font-weight: 600;
  font-size: 18px;
  gap: 15px;
  user-select: none;
`;

const SvgIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#555555"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 16l5-7 6 6.5M19 21l-4-6-4.29 6M14 10h.01M4 19h16a1 1 0 001-1V6a1 1 0 00-1-1H4a1 1 0 00-1 1v12a1 1 0 001 1z" />
  </svg>
);

interface PhotoUploadProps {
  onChange: (file: File | null) => void;
  previewUrl?: string | null;
}

export default function PhotoUpload({ onChange, previewUrl }: PhotoUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onChange(e.target.files[0]);
    } else {
      onChange(null);
    }
  };

  return (
    <UploadGroup onClick={handleClick} role="button" tabIndex={0} onKeyDown={e => { if (e.key === 'Enter') handleClick(); }}>
      <HiddenInput
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      {previewUrl ? (
        <PreviewImage src={previewUrl} alt="Prévisualisation" />
      ) : (
        <TextAndIcon>
          <SvgIcon />
          <div>Ajouter une photo</div>
        </TextAndIcon>
      )}
    </UploadGroup>
  );
}
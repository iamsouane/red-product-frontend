import React, { useRef } from 'react';
import styled from 'styled-components';

const UploadBox = styled.div`
  width: 730px;
  height: 180px;
  border: 2px solid #000;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: #fafafa;
`;

const HiddenInput = styled.input`
  display: none;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextAndIcon = styled.div`
  text-align: center;
  color: #000;
  font-weight: 600;
  font-size: 16px;
`;

const SvgIcon = () => (
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z" />
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
        <UploadBox onClick={handleClick}>
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
        </UploadBox>
    );
}
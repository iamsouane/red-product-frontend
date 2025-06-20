'use client';

import styled from 'styled-components';
import Link from 'next/link';

const BrandWrapper = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 26.66px;
  color: #ffffffde;
  text-decoration: none;
`;

const LogoSVG = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function BrandHeader() {
  return (
    <BrandWrapper href="/">
      <LogoSVG>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
          <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white" />
          <path
            d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z"
            fill="black"
            fillOpacity="0.15"
          />
          <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white" />
        </svg>
      </LogoSVG>
      RED PRODUCT
    </BrandWrapper>
  );
}
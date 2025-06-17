import styled from 'styled-components';

const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoSVG = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const BrandText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 26.66px;
  line-height: 21px;
  color: #fff;
`;

export default function BrandHeader() {
  return (
    <BrandWrapper>
      <LogoSVG>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M2.66602 2.66624H29.3286V29.3288L2.66602 2.66624Z" fill="white" />
          <path
            d="M2.66602 2.66624H22.663L15.9973 15.9975L2.66602 2.66624Z"
            fill="black"
            fillOpacity="0.15"
          />
          <path d="M2.66602 2.66624H15.9973L2.66602 29.3288V2.66624Z" fill="white" />
        </svg>
      </LogoSVG>
      <BrandText>RED PRODUCT</BrandText>
    </BrandWrapper>
  );
}
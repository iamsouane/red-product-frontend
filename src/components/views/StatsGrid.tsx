// src/components/views/StatsGrid.tsx
'use client';

import styled from 'styled-components';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 40px;
  background: #f0f0f0;
`;

export default StatsGrid;
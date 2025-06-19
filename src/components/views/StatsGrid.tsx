// src/components/views/StatsGrid.tsx
'use client';

import styled from 'styled-components';

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 par ligne sur écrans moyens */
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* 1 seule par ligne sur mobile */
  }
`;

export default StatsGrid;
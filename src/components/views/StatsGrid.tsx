'use client';

import styled from 'styled-components';

interface StatsGridProps {
  columns?: number;
}

const StatsGrid = styled.div<StatsGridProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns || 3}, 1fr)`};
  gap: 24px;
  padding: 20px 47.38px;

  @media (max-width: 1024px) {
    grid-template-columns: ${({ columns }) =>
      columns === 4 ? 'repeat(2, 1fr)' : 'repeat(2, 1fr)'};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export default StatsGrid;

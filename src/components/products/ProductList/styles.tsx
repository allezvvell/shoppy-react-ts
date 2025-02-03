import styled, { css } from 'styled-components';
import { media } from '@components/styles/GlobalStyles';

export const commonStyle = css`
  background-color: var(--bg-main);
  padding: 24px 16px;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0 auto;

    ${media.desktopSmall} {
      max-width: 760px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export const Horizontal = styled.div`
  ${commonStyle}

  ul {
    ${media.mobile} {
      overflow-x: auto;
      grid-template-columns: repeat(4, 200px);
    }
  }
`;

export const Vertical = styled.div`
  ${commonStyle}

  ul {
    ${media.mobile} {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  color: var(--text-primary);
  text-align: center;

  ${media.mobile} {
    font-size: 24px;
  }
`;

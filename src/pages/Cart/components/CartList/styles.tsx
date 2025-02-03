import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';

export const ListWrap = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  color: var(--text-primary);

  ${media.tablet} {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  flex: 1;
`;

export const Checkout = styled.div`
  flex-basis: 220px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;

  ${media.tablet} {
    flex-basis: 0;
  }

  p {
    color: var(--text-white);
    font-size: 24px;
  }

  button {
    padding: 12px;
    width: 100%;
    font-size: 14px;
    font-weight: var(--font-bold);
    color: #fff;
    background-color: var(--btn-highlight);
    border-radius: var(--btn-radius);
    transition: all 200ms;

    &:hover {
      background-color: var(--btn-highlight-hover);
    }
  }
`;

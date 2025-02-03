import styled from 'styled-components';

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--text-primary);

  h2 {
    margin-bottom: 12px;
    color: var(--text-white);
    font-size: 16px;
  }

  p {
    margin-bottom: 12px;
    font-size: 14px;
  }

  span {
    margin-bottom: 16px;
    font-weight: var(--font-bold);
    font-size: 24px;
  }
`;

export const CartButtons = styled.div`
  display: flex;
  gap: 12px;

  button,
  a {
    padding: 12px;
    font-size: 12px;
    border-radius: var(--btn-radius);
    transition: all 200ms ease-in-out;
  }

  button {
    color: #fff;
    background-color: var(--btn-highlight);

    &:hover {
      background-color: var(--btn-highlight-hover);
    }
  }

  a {
    color: var(--text-primary);
    border: 1px solid var(--text-primary);

    &:hover {
      color: var(--bg-main);
      background-color: var(--text-primary);
    }
  }
`;

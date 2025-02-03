import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';

export const ItemLi = styled.li`
  margin-bottom: 16px;
  display: flex;

  ${media.mobile} {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const ImageWrap = styled.div`
  overflow: hidden;
  flex-basis: 200px;
  flex-shrink: 0;
  height: 200px;
  border-radius: 12px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  img {
    display: block;
    max-width: 80%;
    max-height: 80%;
  }
`;

export const InfoWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  ${media.mobile} {
    background-color: var(--bg-footer);

    .dark & {
      background-color: transparent;
    }
  }

  h3 {
    margin-bottom: 12px;
    font-size: 18px;
    word-break: break-all;
  }

  p {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: var(--font-bold);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button.delete {
    align-self: stretch;
    padding: 0 8px;
    font-size: 12px;
    background-color: var(--text-primary);
    border-radius: 4px;

    svg {
      color: var(--bg-main);
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  span {
    padding: 0 12px;
  }

  button {
    padding: 8px;
    font-size: 10px;
    background-color: var(--btn-highlight);
    transition: all 200ms;

    &:hover {
      background-color: var(--btn-highlight-hover);
    }

    svg {
      color: #fff;
    }
  }

  button.decrease {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  button.increase {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

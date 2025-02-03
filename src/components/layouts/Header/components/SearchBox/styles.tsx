import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';
import { twoLineText } from '@components/styles/CommonStyles';

export const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  button {
    display: none;
  }

  form {
    display: flex;
  }

  input[type='text'] {
    margin-left: 16px;
    padding: 0 12px;
    width: 240px;
    height: var(--header-button-height);
    background-color: var(--bg-search);
    font-size: 14px;
    color: var(--text-white);
    border-radius: var(--btn-radius);
    transition: opacity 200ms, transform 200ms;

    &::placeholder {
      color: var(--text-primary);
    }
  }

  ${media.tablet} {
    button {
      display: flex;
      margin-left: 8px;
    }

    input[type='text'] {
      position: fixed;
      left: 0;
      top: 0;
      margin-left: 0;
      width: 100%;
      border-radius: 0;
      visibility: hidden;
      opacity: 0;

      &.active {
        visibility: visible;
        opacity: 1;
        transform: translateY(var(--header-height));
      }
    }
  }
`;

export const SearchResult = styled.div`
  visibility: hidden;
  width: 0;
  max-height: 0;

  &.active {
    visibility: visible;
    position: absolute;
    top: calc(100% + var(--header-padding-y));
    right: 0;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    width: 240px;
    max-height: 400px;
    background-color: var(--bg-search-result);
    box-shadow: 0px 2px 4px rgba(50, 50, 50, 0.1);

    ${media.tablet} {
      position: fixed;
      left: 0;
      right: auto;
      top: calc(var(--header-height) + 48px);
      width: 100%;
    }
  }

  a {
    padding: 12px;
    font-size: 15px;
    color: var(--text-white);

    &:hover {
      background-color: var(--bg-hover);
    }

    & > span {
      ${twoLineText}
    }
  }
`;

import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  height: var(--header-height);
  background-color: var(--bg-header);
  color: var(--text-white);

  & > div {
    margin: 0 auto;
    padding: var(--header-padding-y) 16px;
    max-width: var(--main-max-width);
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.tablet} {
      padding: var(--header-padding-y) 4px;
    }
  }
`;

export const TopMenu = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  & > button {
    display: none;
  }

  & > h1 {
    display: flex;
    margin-right: 5px;
    font-size: 18px;
    font-weight: var(--font-bold);
    text-transform: uppercase;

    a {
      color: var(--text-white);
    }
  }

  ${media.tablet} {
    & > button {
      display: flex;
      margin-right: 6px;
    }
  }
`;

export const MainNav = styled.nav`
  margin: 0 5px;

  ul {
    display: flex;
  }

  li {
    display: flex;
  }

  a {
    padding: 5px 9px;
    font-weight: var(--font-bold);
    color: var(--text-white);
    border-radius: var(--btn-radius);
    &:hover {
      background-color: var(--bg-hover);
    }
  }

  ${media.tablet} {
    display: none;
  }
`;

export const ToolBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  ${media.tablet} {
    gap: 0;
  }
`;

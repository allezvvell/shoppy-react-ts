import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 20px;
  width: 300px;
  background-color: var(--bg-sidebar);
  transform: translateX(-100%);
  transition: transform 200ms ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    display: block;
    padding: 12px;
    color: var(--text-white);
    font-weight: var(--font-bold);
    border-radius: var(--btn-radius);

    &:hover {
      background-color: var(--bg-hover);
    }
  }

  .active & {
    transform: translateX(0);
  }
`;

export const Overlay = styled.div`
  visibility: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  cursor: pointer;
  background-color: var(--bg-overlay);
  opacity: 0;
  transition: opacity 200ms ease-in;

  .active & {
    visibility: visible;
    opacity: 1;
  }
`;

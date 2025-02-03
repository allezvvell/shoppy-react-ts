import styled from 'styled-components';
import { media } from '@components/styles/GlobalStyles';

export const SliderBox = styled.div`
  position: relative;
  z-index: 100;
  overflow: hidden;

  ul {
    display: flex;
    transition: transform 300ms ease-in-out;
  }

  li {
    position: relative;
    flex-shrink: 0;
    width: 100%;
  }

  .slider-pagination {
    position: absolute;
    bottom: 12px;
    left: 50%;
    display: flex;
    gap: 12px;
    transform: translateX(-50%);

    button {
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
      opacity: 0.4;

      &.active {
        opacity: 1;
      }
    }
  }

  .slider-navigation-btn {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 36px;
    background-color: transparent;
    opacity: 0.6;
    transition: all 200ms ease-in-out;

    ${media.tablet} {
      display: none;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
      opacity: 1;
    }

    &::before {
      content: '';
      width: 12px;
      height: 12px;
      border-top: 2px solid #fff;
      border-right: 2px solid #fff;
      transform: rotate(45deg);
    }

    &.prev-btn {
      left: 0;
      &::before {
        transform: rotate(225deg);
      }
    }

    &.next-btn {
      right: 0;
    }
  }
`;

export const SliderContent = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  padding: 0 60px;
  background-color: rgba(0, 0, 0, 0.2);
  color: #fff;

  ${media.tablet} {
    padding: 0 16px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    max-width: var(--main-max-width);
  }

  h2 {
    margin-bottom: 16px;
    font-size: 30px;
  }

  p {
    margin-bottom: 24px;
    font-size: 20px;
  }

  a {
    padding: 12px 24px;
    background-color: var(--btn-highlight);
    font-size: 14px;
    color: #fff;
    border-radius: var(--btn-radius);
    transition: background-color 200ms;

    &:hover {
      background-color: var(--btn-highlight-hover);
    }
  }
`;

export const SliderImage = styled.img`
  display: block;
  width: 100%;
  max-height: 600px;
  min-height: 300px;
  object-fit: cover;
`;

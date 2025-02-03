import { keyframes, css } from 'styled-components';

export const shimmer = keyframes`
    0% {
        background-position: -200px 0;
    }

    100% {
        background-position: calc(200px + 100%) 0;
    }
`;

export const shimmerEffect = css`
  background-color: var(--bg-skeleton);
  background-image: linear-gradient(
    90deg,
    var(--bg-skeleton) 0px,
    var(--bg-skeleton-shimmer) 40px,
    var(--bg-skeleton) 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.5s infinite linear;
`;

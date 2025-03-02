import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = ({ children }: { children: ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: var(--main-max-width);
`;

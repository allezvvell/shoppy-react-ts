import { ReactNode } from 'react';
import { Link } from 'react-router';
import styled, { css } from 'styled-components';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  to?: string;
  font?: string;
}

const IconButton = ({ children, onClick, font, to }: Props) => {
  const fontStyle = { fontSize: font ? font : '25px' };

  return to ? (
    <StyledLink to={to} style={fontStyle}>
      {children}
    </StyledLink>
  ) : (
    <Button onClick={onClick} style={fontStyle}>
      {children}
    </Button>
  );
};

export default IconButton;

const commonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: var(--header-button-height);
  height: var(--header-button-height);
  color: var(--text-white);
  border-radius: var(--btn-radius);
  &:hover {
    background-color: var(--bg-hover);
  }
`;

const Button = styled.button`
  ${commonStyle}
`;

const StyledLink = styled(Link)`
  ${commonStyle}
`;

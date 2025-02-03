import styled from 'styled-components';
import { CATEGORY_PATH } from '@constants/category';

const Breadcrumb = ({ path }: { path: string[] }) => {
  return (
    <StyledBreadcrumb>
      <ul>
        {path.map((v) => (
          <li key={v}>{CATEGORY_PATH[v as keyof typeof CATEGORY_PATH] || v}</li>
        ))}
      </ul>
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.ul`
  padding: 12px 16px 4px;
  color: var(--text-primary);

  ul {
    overflow-x: auto;
    display: flex;
    align-items: center;
    padding: 12px 0;
  }

  li {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: inline-block;
      margin: 8px;
      width: 6px;
      height: 6px;
      border-top: 1px solid var(--text-primary);
      border-right: 1px solid var(--text-primary);
      transform: rotate(45deg);
      opacity: 0.8;
    }
    &:first-child::before {
      display: none;
    }
  }
`;

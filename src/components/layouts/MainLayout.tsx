import { Outlet } from 'react-router';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer.tsx';

const MainLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </>
  );
};

export default MainLayout;

const StyledMain = styled.main`
  padding: var(--header-height) 0 40px;
  min-width: var(--main-min-width);
  min-height: calc(100vh - var(--footer-height));
`;

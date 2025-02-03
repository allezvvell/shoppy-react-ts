import { StyledHeader } from './styles';
import { NavLink } from 'react-router';
import { TopMenu, ToolBar, MainNav } from './styles';
import NavList from './components/NavList';
import CartButton from './components/CartButton';
import SearchBox from './components/SearchBox';
import SideNav from './components/SideNav.tsx';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkMode from '@hooks/state/useDarkMode.ts';

const Header = () => {
  const { isDark, toggleIsDark } = useDarkMode();

  return (
    <StyledHeader>
      <div>
        <TopMenu>
          <SideNav />
          <h1>
            <NavLink to={'/'}>shoppy</NavLink>
          </h1>
          <MainNav>
            <NavList />
          </MainNav>
        </TopMenu>
        <ToolBar>
          <DarkModeSwitch
            checked={isDark}
            onChange={toggleIsDark}
            style={{ fill: 'var(--text-white)' }}
            size="25"
          />
          <SearchBox />
          <CartButton />
        </ToolBar>
      </div>
    </StyledHeader>
  );
};

export default Header;

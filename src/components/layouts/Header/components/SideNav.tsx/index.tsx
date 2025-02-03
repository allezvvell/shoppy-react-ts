import { useEffect } from 'react';
import { Overlay, Nav } from './styled';
import IconButton from '@components/UI/IconButton';
import { IoMenu } from 'react-icons/io5';
import NavList from '../NavList';
import useToggle from '@hooks/state/useToggle';

const SideNav = () => {
  const { active, toggleActive } = useToggle();

  useEffect(() => {
    if (active) {
      document.documentElement.classList.add('scroll-lock');
    } else {
      document.documentElement.classList.remove('scroll-lock');
    }
  }, [active]);

  return (
    <>
      <IconButton onClick={toggleActive} font="28px">
        <IoMenu />
      </IconButton>
      <div className={active ? 'active' : ''}>
        <Overlay onClick={toggleActive} />
        <Nav>
          <NavList onClick={toggleActive} />
        </Nav>
      </div>
    </>
  );
};

export default SideNav;

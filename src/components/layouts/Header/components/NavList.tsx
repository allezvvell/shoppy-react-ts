import { NavLink } from 'react-router';
import { CATEGORIES, CategoryType } from '@constants/category';

const NavList = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ul>
      {Object.keys(CATEGORIES).map((c) => (
        <li key={c}>
          <NavLink to={`category/${c}`} onClick={onClick}>
            {CATEGORIES[c as CategoryType]}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

import React from 'react';
import { IoMdSunny, IoMdMoon } from 'react-icons/io';
import { StyledNav, StyledLink, StyledButton } from './styled';
import {
  useAppDispatch,
  useAppSelector,
  toggleTheme,
  selectTheme,
} from '../../store';

function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledNav>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
      </div>
      <StyledButton onClick={handleThemeToggle}>
        {theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
      </StyledButton>
    </StyledNav>
  );
}

export default Navbar;

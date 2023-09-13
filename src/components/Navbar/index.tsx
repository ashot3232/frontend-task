import React from 'react';
import { StyledNav, StyledLink } from './styled';

function Navbar() {
  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/users">Users</StyledLink>
    </StyledNav>
  );
}

export default Navbar;

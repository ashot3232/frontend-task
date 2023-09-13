import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  overflow: hidden;
  background-color: #333;
`;

export const StyledLink = styled(NavLink)`
  float: left;
  display: block;
  color: ${(props) => props.theme.colors.light};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: ${(props) => props.theme.colors.light};
    color: ${(props) => props.theme.colors.dark};
  }

  &.active {
    background-color: #04aa6d;
    color: ${(props) => props.theme.colors.light};
  }
`;

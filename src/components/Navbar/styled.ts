import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  background-color: #1a1a1a;
`;

export const StyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 24px;
  margin-right: 16px;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

export const StyledLink = styled(NavLink)`
  float: left;
  display: block;
  color: #fff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }

  &.active {
    background-color: #04aa6d;
    color: #fff;
  }
`;

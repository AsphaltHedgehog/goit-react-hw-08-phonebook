import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledDiv = styled.div`
  background-color: #333333de;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 25px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: transform 250ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
  &.active {
    color: turquoise;
  }
`;

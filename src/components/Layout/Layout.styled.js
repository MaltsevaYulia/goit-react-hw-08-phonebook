import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.header`
  padding: 15px;
`;

export const Nav = styled('nav')`
  display: flex;
  gap: 20px;
  
  padding: 20px;
  margin-bottom: 15px;
  align-items: baseline
  font-size: 24px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  // border-bottom: 1px solid 0 5px 20px 10px rgba(0, 0, 0, 0.2);
`;

export const StyledNavLink = styled(NavLink)`
  color: #212121;
  text-decoration: none;

  &.active {
    color: #38d39f;
  }
`;

// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { StyledNavLink, Nav } from '../Layout/Layout.styled';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <StyledNavLink to="/">Home</StyledNavLink>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
      {isLoggedIn ? (
        <>
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
      {/* <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink> */}
    </Nav>
  );
};

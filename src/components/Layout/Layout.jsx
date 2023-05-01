import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { StyledNavLink, Nav, Main } from './Layout.styled';
import { Suspense } from 'react';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <>
      <header>
        <Nav>
          {/* <StyledNavLink to="/">Home</StyledNavLink> */}
          {isLoggedIn&&<StyledNavLink to="/contacts">Contacts</StyledNavLink>}
          <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </Nav>
      </header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

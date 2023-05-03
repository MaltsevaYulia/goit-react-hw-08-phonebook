import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import {  Main } from './Layout.styled';
import { Suspense } from 'react';
// import { useAuth } from 'hooks/useAuth';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';

export const Layout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <>
      <header>
          <Navigation />
          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
          {/* <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Login</StyledNavLink> */}
      </header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

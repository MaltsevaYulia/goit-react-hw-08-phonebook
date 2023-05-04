import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import {  Main } from './Layout.styled';
import { Suspense } from 'react';
// import { useAuth } from 'hooks/useAuth';
// import { AuthNav } from 'components/AuthNav/AuthNav';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import css from './Layout.module.css';

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
        <>
          <img className={css.wave} src={require('img/wave.png')} alt="wave" />
          <div className={css.wrapper}>
            <div className={css.img}>
              <img src={require('img/bg.png')} alt="wave" />
            </div>
            <div className={css.login_content}>
              <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
              </Suspense>
            </div>
          </div>
        </>

        <Toaster position="top-right" reverseOrder={false} />
      </Main>
    </>
  );
};


import { useAuth } from 'hooks/useAuth';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink className="nav_link" to="/">
        Home
      </NavLink>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
      {isLoggedIn ? (
        <>
          <NavLink className="nav_link" to="/contacts">
            Contacts
          </NavLink>
          <UserMenu />
        </>
      ) : (
        <AuthNav />
      )}
      {/* <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink> */}
    </nav>
  );
};

import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from 'redux/auth/operations';
import  css  from './UserMenu.module.css';
// import { StyledNavLink, Nav, Main } from '../Layout/Layout.styled';

export const UserMenu = () => {
  const dispatch = useDispatch()
  const {user}=useAuth()
    return (
      // <div className={css.menu}>
      <>
        <p>{user.email}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </>
      // </div>
    );
}
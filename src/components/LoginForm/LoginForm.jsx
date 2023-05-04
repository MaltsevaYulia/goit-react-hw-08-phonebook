import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { logIn } from 'redux/auth/operations';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

import css from '../../components/LoginForm/LoginForm.module.css';

export const LoginForm = () => {
  const [focus, setFocus] = useState('')
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  const handleFocus = (e) => {
    if (e.currentTarget.name === 'email') setFocus('email');
    if (e.currentTarget.name === 'password') setFocus('password');
  }
 const handleBlur = () => {
   setFocus('');
 };

  return (
    <div className={css.login_content}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="on">
        <h2 className={css.title}>Welcome</h2>
        <div
          className={`${css.input_div}  ${css.one} ${
            focus === 'email' && css.focus
          }`}
        >
          <div className={css.i}>
            <HiOutlineMail className={css.before} />
            <i className={`${css.fas} ${css.fa_user}`}></i>
          </div>
          <div className={css.div}>
            <h5>Email</h5>

            <input
              type="email"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="email"
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focus === 'password' && css.focus
          }`}
        >
          <div className={css.i}>
            <RiLockPasswordLine className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Password</h5>
            <input
              type="password"
              name="password"
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>

        {/* <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label> */}
        <button type="submit" className={css.btn}>
          Log In
        </button>
      </form>
    </div>
  );
};

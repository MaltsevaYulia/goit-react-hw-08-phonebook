import { LoginForm } from 'components/LoginForm/LoginForm';
// import { Helmet } from 'react-helmet';

export  const LoginPage=()=> {
  // return (
  //   <div>
  //     {/* <Helmet> */}
  //     <title>Login</title>
  //     {/* </Helmet> */}

  //     <LoginForm />
  //   </div>
  // );
  return (
    <LoginForm />
    // <>
    //   <img className={css.wave} src={require('img/wave.png')} alt="wave" />
    //   <div className={css.wrapper}>
    //     <div className={css.img}>
    //       <img src={require('img/bg.png')} alt="wave" />
    //     </div>
    //     <div className={css.login_content}>
    //       <LoginForm />
    //     </div>
    //   </div>
    // </>
  );
}
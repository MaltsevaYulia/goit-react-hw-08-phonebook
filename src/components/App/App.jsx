// import { useDispatch,  } from 'react-redux';//useSelector

// import { fetchContacts } from 'redux/contacts/operations';
// import { useEffect } from 'react';
// import { getIsLoading } from 'redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
          
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

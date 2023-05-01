// import { useDispatch,  } from 'react-redux';//useSelector

// import { fetchContacts } from 'redux/contacts/operations';
// import { useEffect } from 'react';
// import { getIsLoading } from 'redux/contacts/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'pages/ContactPage/ContactsPage';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

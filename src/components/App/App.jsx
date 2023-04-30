
import {  useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getIsLoading } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { RegisterPage } from 'pages/RegisterPage';
import { ContactsPage } from 'components/pages/ContactPage/ContactsPage';


export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="contacts" element={<ContactsPage/>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};




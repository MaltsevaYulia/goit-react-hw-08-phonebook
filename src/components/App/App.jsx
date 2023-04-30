import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import css from './App.module.css';
import {  useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
const isLoading=useSelector(getIsLoading)
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <div>Loading...</div>}
      <ContactList />
    </div>
  );
};



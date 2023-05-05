import { useState } from 'react';
import css from './ContactForm.module.css';
import { BiUser } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';
import toast from 'react-hot-toast';

const notifyError = name => toast.error(`${name} is already in contacts`);

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [focusName, setFocusName] = useState('');
  const [focusNumber, setFocusNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSabmit = e => {
    e.preventDefault();

    if (contacts.find(el => el.name.toLowerCase() === name.toLowerCase())) {
      notifyError(name);
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  const handleFocus = e => {
    if (e.currentTarget.name === 'name') setFocusName('name');
    if (e.currentTarget.name === 'number') setFocusNumber('number');
  };

  const handleBlur = e => {
    if (e.target.value === '' && e.target.name === 'name')
      setFocusName('');
    if (e.target.value === '' && e.target.name === 'number')
      setFocusNumber('');
  };

  return (
    <div className={css.login_content}>
      <form onSubmit={handleSabmit} className={css.form}>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusName === 'name' && css.focus
          }`}
        >
          <div className={css.i}>
            <BiUser className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Name</h5>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <div
          className={`${css.input_div} ${css.pass} ${
            focusNumber === 'number' && css.focus
          }`}
        >
          <div className={css.i}>
            <BsTelephone className={css.before} />
            <i className={`${css.fas} ${css.fa_lock}`}></i>
          </div>
          <div className={css.div}>
            <h5>Number</h5>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
              value={number}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={css.input}
            />
          </div>
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

// ContactForm.protoType = {
//   addContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
// };

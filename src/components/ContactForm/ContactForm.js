import { useState } from 'react';
import css from './ContactForm.module.css';
// import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact({name, number}));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSabmit} className={css.contact_form}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={name}
      />
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
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

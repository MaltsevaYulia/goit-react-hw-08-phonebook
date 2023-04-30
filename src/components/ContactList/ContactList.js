import { ContactItem } from '../ContactItem/ContactItem';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const normalizedFilter = filter.toLocaleLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.length > 0 &&
        visibleContacts.map(({ name, number, id }) => {
          return (
            <li className={css['contact_item']} key={id}>
              <ContactItem name={name} number={number} id={id} />
            </li>
          );
        })}
    </ul>
  );
};


import { useDispatch, useSelector } from 'react-redux';
import { deleteContactAction } from 'store/user/actions';
import { useEffect } from 'react';

import Notiflix from 'notiflix';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.user.user);
  const { filter } = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  const deleteContact = id => {
    const deletedContact = contacts.find(el => el.id === id);
    dispatch(deleteContactAction(id));
    Notiflix.Notify.info(`${deletedContact.name} was deleted!`);
  };
  return (
    <ul>
      {filteredContacts.map(el => (
        <li className={css.item} key={el.id}>
          <p>
            {el.name}: {el.number}
          </p>
          <button
            onClick={() => deleteContact(el.id)}
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;

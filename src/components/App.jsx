import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import Notiflix from 'notiflix';
import css from './App.module.css';

Notiflix.Notify.init({
  position: 'center-top',
  width: '300px',
});

const App = () => {
  const contacts = useSelector(state => state.user.user);

  useEffect(() => {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

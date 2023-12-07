import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

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
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const addContact = newContact => {
    const isExist = contacts.some(el => el.name === newContact.name);
    if (isExist) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }

    const newContactObj = {
      ...newContact,
      id: nanoid(),
    };
    setContacts([...contacts, newContactObj]);

    Notiflix.Notify.success(`${newContactObj.name} has been added!`);
  };

  const handleDeleteBtn = id => {
    const deletedContact = contacts.find(el => el.id === id);
    Notiflix.Notify.info(`${deletedContact.name} was deleted!`);

    setContacts(contacts.filter(el => el.id !== id));
  };

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('contactsData'));
    if (localData && localData.length > 0) {
      setContacts(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contactsData', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm addContact={addContact} />

      <h2 className={css.contacts}>Contacts</h2>
      <Filter handleFilter={handleFilterChange} />
      <ContactList contacts={filteredContacts} handleDelete={handleDeleteBtn} />
    </div>
  );
};

export default App;

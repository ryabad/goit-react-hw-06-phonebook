import { useState } from 'react';

import css from './ContactForm.module.css';

const ContactForm = props => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.addContact({ name, number });
    setName('');
    setNumber('');
  };

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

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div>
        <label htmlFor="inputName"></label>
        <input
          className={css.nameInput}
          name="name"
          type="text"
          id="inputName"
          onChange={handleChange}
          value={name}
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="inputPhone"></label>
        <input
          className={css.numberInput}
          name="number"
          type="tel"
          id="inputPhone"
          onChange={handleChange}
          value={number}
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="Number"
        />
      </div>
      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;

import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContactToContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const names = contacts.map(contact => contact.name);
    if (!names.find(el => el === name)) {
      setContacts([...contacts, contact]);
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  const handleFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const filterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const deleteContact = user => {
    setContacts(contacts.filter(contact => contact.id !== user));
  };

  useEffect(() => {
    const contactList = window.localStorage.getItem('contacts-list');
    if (!contactList) return;
    try {
      setContacts(JSON.parse(contactList));
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const contactListStringified = JSON.stringify(contacts);
    window.localStorage.setItem('contacts-list', contactListStringified);
  }, [contacts]);

  const filterContacts = filterContact();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactToContacts} />

      <h2>Contacts:</h2>
      <Filter filter={handleFilter} />
      <ContactList contacts={filterContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;

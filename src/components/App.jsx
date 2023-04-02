import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactToContacts = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let contacts = [...this.state.contacts];
    const names = contacts.map(contact => contact.name);
    if (!names.find(i => i === name)) {
      this.setState({
        contacts: [...this.state.contacts, contact],
      });
    } else {
      alert(`${name} is already in contacts`);
    }
  };
  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  deleteContact = user => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== user),
    }));
  };

  componentDidMount() {
    const contactList = window.localStorage.getItem('contacts-list');

    if (!contactList) return;
    try {
      this.setState({
        contacts: JSON.parse(contactList),
      });
    } catch (e) {
      console.error(e);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.length) {
      const contactListStringified = JSON.stringify(this.state.contacts);
      window.localStorage.setItem('contacts-list', contactListStringified);
    }
  }
  render() {
    const filterContacts = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactToContacts} />

        <h2>Contacts:</h2>
        <Filter filter={this.handleFilter} />
        <ContactList
          contacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

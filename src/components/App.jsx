import { nanoid } from 'nanoid';
// import { Phonebook } from './Phonebook';
import { Component } from 'react';
import { SearchForm } from './ContactAddForm/ContactAddForm';
import { ContactForm } from './ContactForm/ContactForm';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContact = newContact => {
    const contact = {
      ...newContact,
      name: newContact.name,
      number: newContact.number,
      id: nanoid(),
    };

    this.setState(prevState => {
      console.log(contact);
      return {
        contacts: [...prevState.contacts, contact],
        name: contact.name,
        number: contact.number,
      };
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== contactId)
      }
    })
  };

  updateContactFilter = query => {
    this.setState({
      filter: query,
    });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className="temp-class">
        <h1>Phonebook</h1>
        <SearchForm
          addContact={this.addContact}
          deleteContact={this.deleteContact}
        />
        <ContactForm
          contacts={contacts}
          filter={filter}
          onContactFilter={this.updateContactFilter}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

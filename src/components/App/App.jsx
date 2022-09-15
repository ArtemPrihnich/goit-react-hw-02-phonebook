import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import ContactsForm from '../ContactsForm/ContactsForm';
import ContactsList from '../ContactsList/ContactsList';
import ContactsFilter from '../ContactsFilter/ContactsFilter';


export default class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  addContact = (contact) => {
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      };
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value })
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state
    if (!filter) {
      return contacts
    }

    const filteredContacts = contacts.filter(({ name, number }) => {
      const result = name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) || number.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
      return result
    })
    return filteredContacts
  }

  render() {
    const { addContact, handleChange } = this
    const contacts = this.getFilteredContacts()
    return (
      <div>
        <ContactsForm onSubmit={addContact} />
        <ContactsFilter inputChange={handleChange} />
        <ContactsList contacts={contacts} />
      </div >
    )
  }
}


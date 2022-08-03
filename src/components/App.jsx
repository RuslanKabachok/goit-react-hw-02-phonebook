import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Form from './Form/Form';
import Contacts from 'components/ContactList/ContactList';
import Find from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const newContact = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    const initialContacts = this.state.contacts;

    if (initialContacts.find(item => item.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [newContact, ...prevState.contacts],
      }));
    }
  };

  handleFindInput = value => {
    this.setState({ filter: value });
  };

  handleDeleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const normalizedContacts = this.state.filter.toLocaleLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );

    return (
      <Wrapper>
        <p>PhoneBook</p>
        <Form onSubmit={this.addContact}> </Form>
        <Find onFindInput={this.handleFindInput}></Find>
        <p>Find contacts by name</p>
        <Contacts
          contacts={filteredContacts}
          onDelete={this.handleDeleteUser}
        ></Contacts>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  padding: 8px;
  width: 400px;
  margin: 0 auto;
  background-color: #c2e0fa;
  border-radius: 4px;
  box-shadow: 2px 3px 13px 0px rgba(0, 0, 0, 0.73); ;
`;

export default App;

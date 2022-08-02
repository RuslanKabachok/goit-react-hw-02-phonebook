import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Form from './Form/Form';
import Contacts from 'components/ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = value => {
    const contact = {
      id: nanoid(),
      name: value,
    };
    console.log(contact);
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <Wrapper>
        <p>PhoneBook</p>
        <Form onSubmit={this.addContact}> </Form>
        <Contacts contacts={this.state.contacts}></Contacts>
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

import React, { Component } from 'react';
import styled from 'styled-components';
import Form from './Form/Form';

class App extends Component {
  state = {
    contacts: [''],
    name: '',
  };

  render() {
    return (
      <Wrapper>
        <p>PhoneBook</p>
        <Form></Form>
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

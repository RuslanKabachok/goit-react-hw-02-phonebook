import React, { Component } from 'react';
import { Label, Input } from './Form.styled';
import { Button } from 'components/Button/Button.styled';

class Form extends Component {
  state = { name: '' };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
  };

  handleChange = event => {
    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
          ></Input>
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    );
  }
}

export default Form;

//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//стили
import styles from './LoginForm.module.css';

//компоненты
import Input from '../Input';

class LoginForm extends Component {
  state = {
    email: null,
    password: null,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    const { email, password } = this.state;
    return (
      <form>
        <Input
          inputLabel="e-mail"
          type="email"
          name="email"
          value={email}
          autoComplete="off"
          onInputChange={this.handleChange}
        />
        <Input
          inputLabel="password"
          name="password"
          value={password}
          autoComplete="off"
          onInputChange={this.handleChange}
        />
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

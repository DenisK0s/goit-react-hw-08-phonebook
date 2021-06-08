//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//стили
import styles from './RegistrationForm.module.css';

//компоненты
import Input from '../Input';

class RegistrationForm extends Component {
  state = {
    name: null,
    email: null,
    password: null,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // const {} = this.props;
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <form className={styles.registrationForm}>
        <Input
          inputLabel="name"
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          onInputChange={this.handleChange}
        />
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

const mapStateToProps = () => {};
const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
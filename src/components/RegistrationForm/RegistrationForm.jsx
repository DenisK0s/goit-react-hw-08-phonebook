//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//стили
import styles from './RegistrationForm.module.css';

//компоненты
import Input from '../Input';
import Button from '../CommonComponents/Button';

//операции
import { authOperations } from '../../redux/auth';

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

    const { onRegister } = this.props;

    onRegister(this.state);
  };
  render() {
    const { email, password, name } = this.state;
    return (
      <form className={styles.registrationForm} onSubmit={this.handleSubmit}>
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
        <Button type="submit">Register</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register()),
});

//сокращённая запись
// const mapDispatchToProps = {
//   onSubmit: authOperations.register,
// };

export default connect(null, mapDispatchToProps)(RegistrationForm);

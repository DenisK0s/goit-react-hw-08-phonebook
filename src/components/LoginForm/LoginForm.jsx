//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//стили
import styles from './LoginForm.module.css';

//компоненты
import Input from '../Input';
import Button from '../CommonComponents/Button';

//операции
import { authOperations } from '../../redux/auth';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { onLogin } = this.props;

    onLogin(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.loginForm} onSubmit={this.handleSubmit}>
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
        <Button type="submit">Enter</Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.logIn(data)),
});

//сокращённая запись
// const mapDispatchToProps = {
//   onLogin: authOperations.login
// };

export default connect(null, mapDispatchToProps)(LoginForm);

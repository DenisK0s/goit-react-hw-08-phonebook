//модули
import React, { Component } from 'react';

//компоненты
import PageTitle from '../components/CommonComponents/PageTitle';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <>
        <PageTitle>Login</PageTitle>
        <LoginForm />
      </>
    );
  }
}

export default LoginPage;

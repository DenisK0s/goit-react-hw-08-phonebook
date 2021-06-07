//модули
import React, { Component } from 'react';

//компоненты
import Container from '../components/CommonComponents/Container';
import PageTitle from '../components/CommonComponents/PageTitle';
import LoginForm from '../components/LoginForm';

class LoginPage extends Component {
  render() {
    return (
      <Container>
        <PageTitle>Login</PageTitle>
        <LoginForm />
      </Container>
    );
  }
}

export default LoginPage;

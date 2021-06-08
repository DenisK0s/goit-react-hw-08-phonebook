//модули
import React, { Component } from 'react';

//компоненты
import Container from '../components/CommonComponents/Container';
import PageTitle from '../components/CommonComponents/PageTitle';
import RegistrationForm from '../components/RegistrationForm';

class RegisterPage extends Component {
  render() {
    return (
      <Container>
        <PageTitle>Registration</PageTitle>
        <RegistrationForm />
      </Container>
    );
  }
}

export default RegisterPage;

//модули
import React, { Component } from 'react';

//компоненты
import PageTitle from '../components/CommonComponents/PageTitle';
import RegistrationForm from '../components/RegistrationForm';

class RegisterPage extends Component {
  render() {
    return (
      <>
        <PageTitle>Registration</PageTitle>
        <RegistrationForm />
      </>
    );
  }
}

export default RegisterPage;

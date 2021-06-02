// модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//компоненты
import Container from './components/Container';
import Form from './components/Form';
import Contacts from './components/Contacts';
import Filter from './components/Filter';
import Loader from '../src/components/Loader';

//операции
import {
  phonebookOperations,
  phonebookSelectors,
} from '../src/redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { loadingContacts } = this.props;
    return (
      <Container>
        <h2 className="Title">Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className="Title">Contacts</h2>
        <Filter />
        {loadingContacts ? <Loader type="Hearts" /> : <Contacts />}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const loading = phonebookSelectors.getLoading(state);

  return {
    loadingContacts: loading,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

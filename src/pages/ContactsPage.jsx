//модули
import React, { Component } from 'react';
import { connect } from 'react-redux';

//компоненты
import ContactsForm from '../components/ContactsForm';
import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import Loader from '../components/Loader';

//операции
import { phonebookOperations, phonebookSelectors } from '../redux/phonebook';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { loadingContacts } = this.props;
    return (
      <>
        <h2 className="Title">Phonebook</h2>
        <ContactsForm onSubmit={this.formSubmitHandler} />
        <h2 className="Title">Contacts</h2>
        <Filter />
        {loadingContacts ? <Loader type="Hearts" /> : <Contacts />}
      </>
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
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);

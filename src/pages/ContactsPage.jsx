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

//стили
import styles from './ContactsPage.module.css';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { loadingContacts } = this.props;
    return (
      <div className={styles.contactsBox}>
        <div className={styles.contactsInfoBar}>
          <h2 className="Title">Form</h2>
          <ContactsForm onSubmit={this.formSubmitHandler} />
          <h2 className="Title">Filter</h2>
          <Filter />
        </div>
        {loadingContacts ? <Loader type="Hearts" /> : <Contacts />}
      </div>
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

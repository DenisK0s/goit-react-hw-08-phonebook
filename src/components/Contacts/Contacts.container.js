//модули
import { connect } from 'react-redux';

//операции
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';

//компоненты
import Contacts from './Contacts.jsx';

const getStateData = currentState => {
  const filter = phonebookSelectors.getFilter(currentState);
  const contacts = phonebookSelectors.getContacts(currentState);
  const loading = phonebookSelectors.getLoading(currentState);
  return { filter, contacts, loading };
};

const mapStateToProps = state => {
  const { filter, contacts } = getStateData(state);

  const currentContactsList =
    filter !== '' ? phonebookSelectors.getFiltredContacts(state) : contacts;

  return {
    contactsItems: currentContactsList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

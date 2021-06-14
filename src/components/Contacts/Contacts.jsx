//модули
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//компоненты
import Button from '../CommonComponents/Button';

//либы
import classnames from 'classnames';

//стили
import styles from './Contacts.module.css';

//операции
import { phonebookOperations } from '../../redux/phonebook';

const Contacts = ({ contactsItems, onDeleteContact, loadingContacts }) => {
  return (
    <div className={styles.contacts}>
      <ul className={classnames(styles.contactsList, 'list')}>
        {contactsItems.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contactsListItem}>
              <span className={styles.contactValue}>
                {name}: {number}
              </span>
              <Button onClick={onDeleteContact} cbArgs={id}>
                delete
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contactsItems: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contacts);

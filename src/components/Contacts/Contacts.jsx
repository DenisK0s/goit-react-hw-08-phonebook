//модули
import PropTypes from 'prop-types';

//либы
import classnames from 'classnames';

//стили
import styles from './Contacts.module.css';

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
              <button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </button>
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

export default Contacts;

//модули
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

//селекторы
import { getIsAuthenticated } from '../../../redux/auth';

//либы
import classnames from 'classnames';

//стили
import styles from './MainNavigation.module.css';

//настройки
import routes from '../../../routes';

const MainNavigation = ({ isAuthenticated }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={classnames(styles.mainNavList, 'list')}>
        <NavLink
          key="Home"
          to={routes.home}
          exact
          className={classnames(styles.navigationItem, 'link')}
          activeClassName={styles.navigationActiveItem}
        >
          Home
        </NavLink>
        {isAuthenticated && (
          <NavLink
            key="Contacts"
            to={routes.contacts}
            exact
            className={classnames(styles.navigationItem, 'link')}
            activeClassName={styles.navigationActiveItem}
          >
            Contacts
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(MainNavigation);

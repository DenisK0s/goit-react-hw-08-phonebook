//модули
import { NavLink } from 'react-router-dom';

//либы
import classnames from 'classnames';

//стили
import styles from './AuthNavigation.module.css';

//настройки
import routes from '../../../routes';

const AuthNavigation = () => {
  return (
    <div className={styles.authNavBox}>
      <NavLink
        className={classnames(styles.authNavLink, 'link')}
        activeClassName={styles.authNavActiveLink}
        to={routes.registration}
        exact
      >
        Registration
      </NavLink>
      <NavLink
        className={classnames(styles.authNavLink, 'link')}
        activeClassName={styles.authNavActiveLink}
        to={routes.login}
        exact
      >
        Login
      </NavLink>
    </div>
  );
};

AuthNavigation.propTypes = {};

export default AuthNavigation;

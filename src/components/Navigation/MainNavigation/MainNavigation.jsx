//модули
import { NavLink } from 'react-router-dom';

//либы
import classnames from 'classnames';

//стили
import styles from './MainNavigation.module.css';

//настройки
import routes from '../../../routes';

const navLinkData = [
  { path: `${routes.home}`, name: 'Home', exact: true },
  { path: `${routes.contacts}`, name: 'Contacts', exact: true },
];

const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={classnames(styles.mainNavList, 'list')}>
        {navLinkData.map(({ path, name, exact }) => (
          <NavLink
            key={name}
            to={path}
            exact={exact}
            className={classnames(styles.navigationItem, 'link')}
            activeClassName={styles.navigationActiveItem}
          >
            {name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;

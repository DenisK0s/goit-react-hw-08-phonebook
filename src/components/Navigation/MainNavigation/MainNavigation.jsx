//модули
import { NavLink } from 'react-router-dom';

//стили
import styles from 'Navigation.module.css';

//настройки
import routes from '../../routes';

const navLinkData = [
  { path: `${routes.home}`, name: 'Home', exact: true },
  { path: `${routes.contacts}`, name: 'Contacts' },
];

const MainNavigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {navLinkData.map(({ path, name, exact }) => (
          <NavLink
            key={name}
            to={path}
            exact={exact}
            className={styles.navigationItem}
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

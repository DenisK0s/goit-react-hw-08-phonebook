//модули

//компоненты
import MainNavigation from '../Navigation/MainNavigation';
import AuthNavigation from '../Navigation/AuthNavigation';
import UserMenu from '../UserMenu';

//либы
import classnames from 'classnames';

//стили
import styles from './AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.appBar}>
      <div className={classnames(styles.headerContainer, 'container')}>
        <MainNavigation />
        {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
      </div>
    </header>
  );
};

export default AppBar;

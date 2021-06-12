//модули

//компоненты
import MainNavigation from '../Navigation/MainNavigation';
import Logo from '../Logo';
import AuthNavigation from '../Navigation/AuthNavigation';
import UserMenu from '../UserMenu';

//либы
import classnames from 'classnames';

//селекторы
import { getIsAuthenticated } from '../../redux/auth';

//стили
import styles from './AppBar.module.css';
import { connect } from 'react-redux';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.appBar}>
      <div className={classnames(styles.headerContainer, 'container')}>
        <Logo />
        <MainNavigation />
        {isAuthenticated ? <UserMenu /> : <AuthNavigation />}
      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

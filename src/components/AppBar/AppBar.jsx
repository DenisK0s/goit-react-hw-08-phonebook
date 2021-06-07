//модули

//компоненты
import Container from '../CommonComponents/Container';
import MainNavigation from '../Navigation/MainNavigation';
import AuthNavigation from '../Navigation/AuthNavigation';

//стили
import styles from 'AppBar.module.css';

const AppBar = ({ isAuthenticated }) => {
  return (
    <header className={styles.appBar}>
      <Container>
        <MainNavigation />
        {isAuthenticated ? <Usermenu /> : <AuthNavigation />}
      </Container>
    </header>
  );
};

export default AppBar;

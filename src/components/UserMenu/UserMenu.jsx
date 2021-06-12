//модули
import { connect } from 'react-redux';

//компоненты
import Button from '../CommonComponents/Button';

//редакс
import { getUserName } from '../../redux/auth';
import { authOperations } from '../../redux/auth';

//стили
import styles from './UserMenu.module.css';

//иконки
import defAvatarIcon from '../../icons/user.png';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.userMenuBox}>
      <img src={avatar} alt="user" className={styles.avatar} />
      <span className={styles.userinfo}>Welcome "{name}"</span>
      <Button cbOnClick={onLogout}>Logout</Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defAvatarIcon,
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(authOperations.logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

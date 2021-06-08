//стили
import styles from './UserMenu.module.css';

//компоненты
import Button from '../CommonComponents/Button';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div className={styles.userMenuBox}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span>Welcome, {name}</span>
      <Button cbOnClick={onLogout}>Logout</Button>
    </div>
  );
};

export default UserMenu;

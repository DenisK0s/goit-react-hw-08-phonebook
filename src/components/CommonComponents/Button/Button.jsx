//либы
import classnames from 'classnames';

//стили
import styles from './Button.module.css';

const Button = ({ children, type = 'button', className, cbOnClick }) => {
  return cbOnClick ? (
    <button
      type={type}
      onClick={cbOnClick}
      className={classnames(styles.button, className)}
    >
      {children}
    </button>
  ) : (
    <button type={type} className={classnames(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;

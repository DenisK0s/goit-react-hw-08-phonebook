//модули
import PropTypes from 'prop-types';

//стили
import styles from './Input.module.css';

const Input = ({
  inputLabel,
  type = 'text',
  value,
  onInputChange,
  pattern,
  title,
  name,
}) => {
  return (
    <label htmlFor="" className={styles.inputLabel}>
      {inputLabel}
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value}
        pattern={pattern}
        title={title}
        required
        onChange={onInputChange}
        autoComplete="off"
      />
    </label>
  );
};

Input.propTypes = {
  inputLabel: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  onInputChange: PropTypes.func,
};

export default Input;

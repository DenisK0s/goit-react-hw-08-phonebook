//либы
import Loader from 'react-loader-spinner';

//стили
import styles from './Loader.module.css';

const Download = ({ type = 'Puff', color, height, width, timeout }) => {
  return (
    <div className={styles.loader}>
      <Loader
        type={type}
        color={color}
        height={height}
        width={width}
        timeout={timeout}
      />
    </div>
  );
};

export default Download;

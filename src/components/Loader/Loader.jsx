//либы
import Loader from 'react-loader-spinner';

const Download = ({ type = 'Puff', color, height, width, timeout }) => {
  return (
    <Loader
      type={type}
      color={color}
      height={height}
      width={width}
      timeout={timeout}
    />
  );
};

export default Download;

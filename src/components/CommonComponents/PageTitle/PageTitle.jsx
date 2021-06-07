//либы
import classnames from 'classnames';

//стили
import styles from './PageTitle.module.css';

const PageTitle = ({ children, classType }) => {
  const currentClass = classnames(styles.PageTitle, classType);
  return <h1 className={currentClass}>{children}</h1>;
};

export default PageTitle;

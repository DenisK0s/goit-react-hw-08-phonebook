//либы
import classnames from 'classnames';

//стили
import styles from './PageTitle.module.css';

const PageTitle = ({ children, className }) => {
  const currentClass = classnames(styles.pageTitle, className);
  return <h1 className={currentClass}>{children}</h1>;
};

export default PageTitle;

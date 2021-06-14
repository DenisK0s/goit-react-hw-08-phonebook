//модули
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//селекторы
import { getIsAuthenticated } from '../../redux/auth';

const PrivatRoute = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...routerProps
}) => (
  <Route
    {...routerProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to={redirectTo} />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivatRoute);

//модули
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//селекторы
import { getIsAuthenticated } from '../../redux/auth';

//пути
import routes from '../../routes';

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...routerProps
}) => (
  <Route
    {...routerProps}
    render={props =>
      isAuthenticated && routerProps.restricted ? (
        <Redirect to={routes.contacts} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

/* <PublicRoute
  path={routes.login}
  component={LoginPage}
  redirectTo="/contacts"
  restricted
/>; */

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PublicRoute);

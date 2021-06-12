//модули
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//селекторы
import { getIsAuthenticated } from '../../redux/auth';

const PrivatRoute = ({
  component: Component,
  isAuthenticated,
  ...routerProps
}) => (
  <Route
    {...routerProps}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(PrivatRoute);

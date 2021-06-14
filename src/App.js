// модули
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

//компоненты
import AppBar from './components/AppBar';
import Container from './components/CommonComponents/Container';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

//операции
import { authOperations } from './redux/auth';

//пути
import routes from './routes';

//чанки
const HomePage = lazy(() =>
  import('./pages/HomePage.jsx' /*webpackChunkName: "home-page" */),
);
const ContactsPage = lazy(() =>
  import('./pages/ContactsPage.jsx' /*webpackChunkName: "contacts-page" */),
);
const RegisterPage = lazy(() =>
  import('./pages/RegisterPage.jsx' /*webpackChunkName: "registration-page" */),
);
const LoginPage = lazy(() =>
  import('./pages/LoginPage.jsx' /*webpackChunkName: "login-page" */),
);
const ErrorPage = lazy(() =>
  import('./pages/ErrorPage.jsx' /*webpackChunkName: "error-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <PublicRoute path={routes.home} exact component={HomePage} />
              <PrivateRoute
                path={routes.contacts}
                component={ContactsPage}
                redirectTo="/login"
              />
              <PublicRoute
                path={routes.registration}
                component={RegisterPage}
                restricted
              />
              <PublicRoute
                path={routes.login}
                component={LoginPage}
                restricted
              />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);

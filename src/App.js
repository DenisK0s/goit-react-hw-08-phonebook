// модули
import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

//компоненты
import AppBar from './components/AppBar';
import Container from './components/CommonComponents/Container';

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
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              <Route path={routes.home} exact component={HomePage} />
              <Route path={routes.contacts} component={ContactsPage} />
              <Route path={routes.registration} component={RegisterPage} />
              <Route path={routes.login} component={LoginPage} />
              <Route component={ErrorPage} />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;

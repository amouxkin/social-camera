import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { TransitionGroup, Transition } from "react-transition-group";

import ErrorBoundary from "./Error";
import Header from "./components/header";
import GlobalStyle from "./components/styles/GlobalStyle";
import { Authentication } from "./pages/authentication/Authentication";
import PrivateRoute from "./components/privateRoute/PricateRoute";

const Profile = React.lazy(() => import("./pages/profile/Profile.jsx"));
const NotFound = React.lazy(() => import("./pages/404"));

const App = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="bottom-left"
      >
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route path={"/auth"} component={Authentication} />
            <PrivateRoute exact path="/" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ToastProvider>
    </Suspense>
  </ErrorBoundary>
);

export default App;

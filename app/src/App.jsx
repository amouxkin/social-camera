import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import ErrorBoundary from "./Error";
import Header from "./components/header";
import GlobalStyle from "./components/styles/GlobalStyle";
import { Authentication } from "./pages/authentication/authentication";
import PrivateRoute from "./components/privateRoute/pricateRoute";

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
          <Route path={"/auth"} component={Authentication} />
          <Switch>
            <PrivateRoute exact path="/" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </ToastProvider>
    </Suspense>
  </ErrorBoundary>
);

export default App;

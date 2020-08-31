import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

import ErrorBoundary from "./Error";
import Header from "./components/header";
import GlobalStyle from "./components/styles/GlobalStyle";
import { Authentication } from "./pages/authentication/Authentication";
import { PrivateRoute } from "./components/privateRoute/PrivateRoute";
import { UserContext } from "./contexts/UserContext";

const Profile = React.lazy(() => import("./pages/profile/Profile.jsx"));
const NotFound = React.lazy(() => import("./pages/404"));

const App = () => {
  const [name, setName] = useState();

  return <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <ToastProvider
        autoDismiss
        autoDismissTimeout={3000}
        placement="bottom-left"
      >
        <GlobalStyle/>
        <UserContext.Provider value={{name, setName}}>
          <Router>
            <Header/>
            <Switch>
              <Route path={"/auth"} component={Authentication}/>
              <PrivateRoute exact path="/" component={Profile}/>
              <Route path="*" component={NotFound}/>
            </Switch>
          </Router>
        </UserContext.Provider>
      </ToastProvider>
    </Suspense>
  </ErrorBoundary>
};

export default App;

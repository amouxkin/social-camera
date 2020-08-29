import React, { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../lib/authentication";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: FC<PrivateRouteProps> = (props) =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to={"/auth"} />;

export default PrivateRoute;

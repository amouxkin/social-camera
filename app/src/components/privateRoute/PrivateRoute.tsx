import React, { FC } from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../lib/fetchHelper";

interface PrivateRouteProps extends RouteProps {}

export const PrivateRoute: FC<PrivateRouteProps> = (props) =>
  isAuthenticated() ? <Route {...props} /> : <Redirect to={"/auth"} />;

export const PrivateOnlyRoute: FC<PrivateRouteProps> = (props) =>
  isAuthenticated() ? <Route {...props} /> : <></>;


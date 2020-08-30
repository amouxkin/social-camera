import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Container,
  Card,
  LogoImage,
  BaseContainer,
  IntroMessage,
  AuthContainer,
  AuthButtonContainer,
  AuthButton,
  AuthForm,
} from "./styles";
// @ts-ignore
import logo from "../../assets/img/app-icon.png";
import LoginForm from "../../components/forms/LoginForm";
import AuthenticationContext from "../../components/forms/AuthenticationContext";
import RegisterForm from "../../components/forms/RegisterForm";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);
  const state: any = {};
  [state.name, state.setName] = useState();
  [state.email, state.setEmail] = useState();
  [state.password, state.setPassword] = useState();
  [state.passwordConfirmation, state.setPasswordConfirmation] = useState();

  return (
    <Container>
      <Card>
        <BaseContainer>
          <LogoImage src={logo} />
          <IntroMessage>
            A better way for remote teams to connect and collaborate.
          </IntroMessage>
        </BaseContainer>
        <AuthContainer>
          <AuthButtonContainer>
            <AuthButton
              onClick={isLogin ? null : () => setLogin(true)}
              selected={isLogin}
            >
              Login
            </AuthButton>
            <AuthButton
              onClick={!isLogin ? null : () => setLogin(false)}
              selected={!isLogin}
            >
              Sign Up
            </AuthButton>
          </AuthButtonContainer>
          <AuthenticationContext.Provider
            value={state}
          >
            <AuthForm>
              {/*<LoginForm />*/}
              <RegisterForm />
            </AuthForm>
          </AuthenticationContext.Provider>
        </AuthContainer>
      </Card>
    </Container>
  );
};

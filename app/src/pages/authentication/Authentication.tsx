import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Container,
  Card,
  LogoImage,
  BaseContainer,
  IntroMessage,
  AuthContainer,
  AuthForm,
} from "./styles";
import {
  AuthButtonContainer,
  AuthButton,
} from "../../components/forms/AuthButton";
import logo from "../../assets/img/app-icon.png";
import LoginForm from "../../components/forms/LoginForm";
import AuthenticationContext, {useResetAuthentication} from "../../components/forms/AuthenticationContext";
import RegisterForm from "../../components/forms/RegisterForm";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);
  const state: any = {};
  [state.name, state.setName] = useState();
  [state.email, state.setEmail] = useState();
  [state.password, state.setPassword] = useState();
  [state.passwordConfirmation, state.setPasswordConfirmation] = useState();

  const selectLogin = (value: boolean) => {
    useResetAuthentication();
    setLogin(value);
  }

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
              onClick={isLogin ? null : () => selectLogin(true)}
              selected={isLogin}
            >
              Login
            </AuthButton>
            <AuthButton
              onClick={!isLogin ? null : () => selectLogin(false)}
              selected={!isLogin}
            >
              Sign Up
            </AuthButton>
          </AuthButtonContainer>
          <AuthenticationContext.Provider value={state}>
            <AuthForm>{isLogin ? <LoginForm /> : <RegisterForm />}</AuthForm>
          </AuthenticationContext.Provider>
        </AuthContainer>
      </Card>
    </Container>
  );
};

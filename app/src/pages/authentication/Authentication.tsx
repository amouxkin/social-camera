import React, { useState } from "react";
import Loading from "react-loading-overlay";

import {
  Container,
  Card,
  LogoImage,
  BaseContainer,
  IntroMessage,
  AuthContainer,
  AuthForm,
  SwitchText,
} from "./styles";
import {
  AuthButtonContainer,
  AuthButton,
} from "../../components/forms/AuthButton";
import logo from "../../assets/img/app-icon.png";
import LoginForm from "../../components/forms/authForm/LoginForm";
import AuthenticationContext from "../../contexts/AuthenticationContext";
import RegisterForm from "../../components/forms/authForm/RegisterForm";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);
  const state: any = {};
  [state.isLoading, state.setIsLoading] = useState();

  const selectLogin = (value: boolean) => {
    Object.values(state)
      .filter((value) => typeof value === "function")
      .forEach((set: (value: any) => void) => set(null));
    setLogin(value);
  };

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
          <AuthenticationContext.Provider value={state}>
              <Loading active={state.isLoading} spinner>
                <AuthForm>
                  {isLogin ? <LoginForm /> : <RegisterForm />}
                </AuthForm>
              </Loading>
          </AuthenticationContext.Provider>
          <AuthButtonContainer>
            {!isLogin ? (
              <div>
                <SwitchText>Have an account ?</SwitchText>
                <AuthButton
                  onClick={isLogin ? null : () => selectLogin(true)}
                  selected={isLogin}
                >
                  Login
                </AuthButton>
              </div>
            ) : (
              <div>
                <SwitchText>Need an account ?</SwitchText>
                <AuthButton
                  onClick={!isLogin ? null : () => selectLogin(false)}
                  selected={!isLogin}
                >
                  Sign Up
                </AuthButton>
              </div>
            )}
          </AuthButtonContainer>
        </AuthContainer>
      </Card>
    </Container>
  );
};

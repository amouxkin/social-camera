import React, { useContext, useState } from "react";
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
import AuthenticationContext from "../../components/forms/AuthenticationContext";
import RegisterForm from "../../components/forms/authForm/RegisterForm";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);
  const state: any = {};
  [state.name, state.setName] = useState();
  [state.email, state.setEmail] = useState();
  [state.password, state.setPassword] = useState();
  [state.passwordConfirmation, state.setPasswordConfirmation] = useState();

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
            <AuthForm>{isLogin ? <LoginForm /> : <RegisterForm />}</AuthForm>
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

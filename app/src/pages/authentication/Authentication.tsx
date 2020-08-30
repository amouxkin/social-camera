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
  AuthForm
} from "./styles";
// @ts-ignore
import logo from "../../assets/img/app-icon.png";
import LoginForm from "../../components/forms/LoginForm";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);

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
            <AuthButton onClick={isLogin ? null : () => setLogin(true)} selected={isLogin}>Login</AuthButton>
            <AuthButton onClick={!isLogin ? null : () => setLogin(false)} selected={!isLogin}>Sign Up</AuthButton>
          </AuthButtonContainer>
          <AuthForm>
            <LoginForm/>
          </AuthForm>
        </AuthContainer>
      </Card>
    </Container>
  );
};

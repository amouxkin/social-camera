import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Container,
  Card,
  LogoImage,
  BaseContainer,
  IntroMessage,
} from "./styles";
import logo from "../../assets/img/app-icon.png";

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
        <BaseContainer>
          <h1>Sign Up</h1>
        </BaseContainer>
      </Card>
    </Container>
  );
};

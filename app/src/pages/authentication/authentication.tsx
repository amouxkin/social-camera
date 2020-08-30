import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Container, Card, LogoImage, LogoContainer } from "./styles";
import logo from "../../assets/img/app-icon.png";

export const Authentication = () => {
  const [isLogin, setLogin] = useState(true);

  return (
    <Container>
      <Card>
        <LogoContainer>
          <LogoImage src={logo} />
        </LogoContainer>
        <h1>Sign Up</h1>
      </Card>
    </Container>
  );
};

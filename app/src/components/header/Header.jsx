import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  LogoWrapper,
  LogoImg,
  LogoutContainer,
} from "./style";
import { AuthButton } from "../forms/AuthButton";
import { logout } from "../../lib/authentication";

const Header = () => {
  const title = "Social Camera";
  const onClick = () => {
    logout();
    window.location.reload();
  };
  return (
    <HeaderContainer>
      <Link to="/organizations">
        <LogoWrapper>
          <LogoImg
            src={require("../../assets/img/app-icon.png")}
            alt="Gibril App Logo"
          />
          <Logo>{title}</Logo>
        </LogoWrapper>
      </Link>
      <LogoutContainer>
        <div>
          <AuthButton onClick={onClick}>Logout</AuthButton>
        </div>
      </LogoutContainer>
    </HeaderContainer>
  );
};

export default Header;

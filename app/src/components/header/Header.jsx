import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  HeaderContainer,
  Logo,
  LogoWrapper,
  LogoImg,
  LogoutContainer,
} from './style';
import { AuthButton } from '../forms/authForm/AuthButton';
import { isAuthenticated, logout } from '../../lib/authentication';
import AuthenticationContext from '../../contexts/AuthenticationContext';

const Header = () => {
  const title = 'Social Camera';
  const onClick = () => {
    logout();
    window.location.reload();
  };

  useEffect(() => {
    console.log(isAuthenticated());
  }, [window.location]);

  return (
    <HeaderContainer>
      <Link to="/organizations">
        <LogoWrapper>
          <LogoImg
            src={require('../../assets/img/app-icon.png')}
            alt="Gibril App Logo"
          />
          <Logo>{title}</Logo>
        </LogoWrapper>
      </Link>
      {isAuthenticated() && (
        <LogoutContainer>
          <div>
            <AuthButton onClick={onClick}>Logout</AuthButton>
          </div>
        </LogoutContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;

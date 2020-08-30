import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #101010;
  font-size: 24px;
  line-height: 30px;
`;

export const Logo = styled.h1`
  margin-left: 0.5rem;
  font-size: 24px;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
`;

export const LogoImg = styled.img`
  margin-left: 2rem;
  max-width: 1.5rem;
  max-height: 1.75rem;
`;

export const LogoutContainer = styled.div`
  align-items: end;
  align-content: end;
  justify-content: flex-end;
  justify-items: flex-end;
  display: flex;
  flex:1;
  width: auto;
  padding-right: 20px
`;

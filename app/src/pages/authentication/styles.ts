import styled from "styled-components";

export const BaseContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled(BaseContainer as any)`
  align-content: center;
  align-items: center;
  background: rgb(68, 68, 68);
  display: flex;
  flex-direction: row;
  height: calc(100% - 64px);
  justify-content: center;
  position: relative;
`;

export const AuthContainer = styled(BaseContainer as any)`
  background-color: aliceblue;
  border-radius: 12px;
`;

export const AuthButtonContainer = styled(BaseContainer as any)`
  flex-direction: row;
  height: 32px;
  width: 100%;
  flex: none;
  justify-content: space-around;
  overflow: hidden;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const Card = styled.div`
  align-content: center;
  background: #101010;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  max-height: 700px;
  max-width: 1000px;
  min-height: 300px;
  min-width: 300px;
  height: 75%;
  width: 75%;
  padding: 16px 12px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  @media (max-width: 480px) {
    flex-direction: column;
    max-height: 100%;
    height: 95%;
    width: 95%;
  }
`;

export const IntroMessage = styled.h1`
  padding: 56px 10px;
  text-align: center;
`;

export const LogoImage = styled.img`
  height: 180px;
  width: 158px;

  @media (max-width: 480px), (max-height: 720px) {
    height: 90px;
    width: 79px;
  }
`;

export const AuthButton = styled.button`
  color: ${({ selected }) => (!selected ? "var(--gb-web-text)" : "white")};
  background-color: ${({ selected }) =>
    selected ? "var(--gb-red)" : "#101010"};
  border-radius: 0px;
  margin: 0px 0px;
  transition: background-color 0.5s ease;
`;

export const AuthForm = styled.div`
  background-color: aquamarine;
  flex: 1;
`;

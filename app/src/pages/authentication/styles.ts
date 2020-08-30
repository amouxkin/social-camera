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

  @media (max-width: 480px) {
    height: 90px;
    width: 79px;
  }
`;

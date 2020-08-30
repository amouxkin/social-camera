import styled from "styled-components";
import { ComponentPropsWithoutRef } from "react";

export interface BaseDivProps extends ComponentPropsWithoutRef<"div"> {}

export const BaseContainer = styled.div<BaseDivProps>`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
`;

export const Container = styled(BaseContainer)<BaseDivProps>`
  align-content: center;
  align-items: center;
  background: rgb(68, 68, 68);
  display: flex;
  flex-direction: row;
  height: calc(100% - 64px);
  justify-content: center;
  position: relative;
`;

export const AuthContainer = styled(BaseContainer)<BaseDivProps>`
  background-color: var(--gb-white);
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 800px) {
    border-radius: 0px;
  }
`;

export const Card = styled.div<BaseDivProps>`
  align-content: center;
  background: #101010;
  border-radius: 0px;
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

  @media (max-width: 800px) {
    flex-direction: column;
    max-height: 150%;
    height: auto;
    min-height: 100%;
    min-width: 100%;
    padding: 0px;
    border-radius: 0px;
  }
`;

export const IntroMessage = styled.h1<ComponentPropsWithoutRef<"h1">>`
  padding: 56px 10px;
  text-align: center;
`;

export const LogoImage = styled.img<ComponentPropsWithoutRef<"img">>`
  height: 180px;
  width: 158px;

  @media (max-width: 480px), (max-height: 720px) {
    height: 90px;
    width: 79px;
  }
`;

export const AuthForm = styled.div`
  flex: 1;
  height: 50%;
`;

import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { BaseDivProps } from "../../../pages/authentication/styles";

export interface BaseInputProps extends ComponentPropsWithoutRef<"input"> {}

export const BaseInput = styled.input<BaseInputProps>`
  color: green;
  border: 1px solid #fff;
  height: 40px;
`;

export const AuthIcon = styled.img<ComponentPropsWithoutRef<"img">>`
  height: 100%;
  width: 40px;
  background-color: var(--gb-web-background);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const AuthInputContainer = styled.div<BaseDivProps>`
  display: flex;
  margin-top: 16px;
`;

import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { BaseDivProps } from "../../../pages/authentication/styles";

export interface BaseInputProps extends ComponentPropsWithoutRef<"input"> {}

export const BaseInput = styled.input<BaseInputProps>`
  border: 1px solid #fff;
  height: 40px;
  padding: 8px;
  vertical-align: middle;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--gb-white);
  color: var(--gb-web-grey-darker);
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;

  ::placeholder {
    color: var(--gb-web-grey-dark);
    vertical-align: middle;
    line-height: 40px !important;
    padding-bottom: 0px !important;
    font-size: 16px !important;
  }
`;

export const AuthIcon = styled.img<ComponentPropsWithoutRef<"img">>`
  height: 40px;
  width: 40px;
  background-color: var(--gb-red);
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 4px;
`;

export const AuthInputContainer = styled.div<BaseDivProps>`
  display: flex;
  margin-top: 24px;
`;

export const SubmitButton = styled.button<ComponentPropsWithoutRef<"button">>`
  margin-top: 60px;
  background-color: var(--gb-red);
`;

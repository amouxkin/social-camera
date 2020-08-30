import styled from "styled-components";
import { ComponentPropsWithoutRef } from "react";

export const FormContainer = styled.form<ComponentPropsWithoutRef<"form">>`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 200px;
  height: 100%;
  width: 100%;
`;

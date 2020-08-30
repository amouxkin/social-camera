import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { BaseContainer, BaseDivProps } from "../../pages/authentication/styles";

interface AuthButtonProps extends ComponentPropsWithoutRef<"button"> {
  selected: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  color: var(
    ${({ selected }) => (!selected ? "--gb-white" : "--gb-web-grey-darker")}
  );
  background-color: var(
    ${({ selected }) => (selected ? "--gb-red" : "--gb-web-grey-darker")}
  );
  border-radius: 0px;
  margin: 0px 0px;
  transition: background-color 0.5s ease;

  &:hover {
    opacity: 1;
    background-color: var(--gb-web-red);
  }
`;

export const AuthButtonContainer = styled(BaseContainer)<BaseDivProps>`
  flex-direction: row;
  height: 40px;
  width: 100%;
  flex: none;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 480px) {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

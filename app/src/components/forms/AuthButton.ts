import { ComponentPropsWithoutRef } from "react";
import styled from "styled-components";
import { BaseContainer, BaseDivProps } from "../../pages/authentication/styles";

interface AuthButtonProps extends ComponentPropsWithoutRef<"button"> {
  selected: boolean;
}

export const AuthButton = styled.button<AuthButtonProps>`
  transition: background-color 0.5s ease;
  background: transparent none repeat scroll 0 0;
  color: var( ${({selected}) => !selected ? "--gb-white" : "--gb-web-grey-dark" } );
  padding: 15px;
  text-decoration: none;
 
  &:hover {
    opacity: 0.5;
  }
`;

export const AuthButtonContainer = styled(BaseContainer)<BaseDivProps>`
  flex-direction: row;
  align-items: flex-start;
  height: 40px;
  width: 100%;
  justify-content: space-around;
  overflow: hidden;

  @media (max-width: 720px) {
    flex: 1;
    align-items: center;
  }
`;

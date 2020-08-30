import React, { useContext, useState } from "react";
import { FormContainer } from "../styles";
import AuthenticationContext from "../AuthenticationContext";
import { AuthIcon, AuthInputContainer, BaseInput, SubmitButton } from "./styles";
import user from "../../../assets/img/user.svg";
import password from "../../../assets/img/password.svg";

const LoginForm = () => {
  const state = useContext(AuthenticationContext);

  return (
    <FormContainer>
      <AuthInputContainer>
        <AuthIcon src={user} />
        <BaseInput required  placeholder={"Email"} />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthIcon src={password} />
        <BaseInput placeholder={"Password"} type="password" />
      </AuthInputContainer>
      <SubmitButton> Submit </SubmitButton>
    </FormContainer>
  );
};

export default LoginForm;

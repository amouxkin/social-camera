import React, { useContext, useState } from "react";
import { FormContainer } from "./styles";
import AuthenticationContext from "./AuthenticationContext";

const RegisterForm = () => {
  const context = useContext(AuthenticationContext);

  return (
    <FormContainer>
      <label>Email {context.name}</label>
      <input />
      <label>Password</label>
      <input />
      <label>Password Confirmation</label>
      <input />
      <input type={"button"} />
    </FormContainer>
  );
};

export default RegisterForm;

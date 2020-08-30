import React, { useState } from "react";
import { FormContainer } from "./styles";

const RegisterForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  return <FormContainer>
    <label>Email</label>
    <input/>
    <label>Password</label>
    <input/>
    <label>Password Confirmation</label>
    <input/>
    <input type={"button"}/>
  </FormContainer>
}

export default RegisterForm;

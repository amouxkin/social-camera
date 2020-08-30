import React, { useState } from "react";
import { FormContainer } from "./styles";

const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return <FormContainer>
    <label>Email</label>
    <input/>
    <label>Password</label>
    <input/>
  </FormContainer>
}

export default LoginForm;

import React, { useState } from "react";
import { FormContainer } from "../styles";
import {
  AuthIcon,
  AuthInputContainer,
  BaseInput,
  SubmitButton,
} from "./styles";
import user from "../../../assets/img/user.svg";
import password from "../../../assets/img/password.svg";
import { isAuthenticated, login } from "../../../lib/authentication";
import { Redirect, useHistory } from "react-router-dom";

const LoginForm = () => {
  const [requiredCheck, setRequired] = useState(false);

  const submit = (e: React.FormEvent) => {
    if (!requiredCheck) setRequired(true);

    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log(data);
    login(
      JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      })
    )
      .then((loggedIn) => {
        if (!loggedIn) throw new Error("Failed to Login");
        window.location.reload();
      })
      .catch((e) => console.log(e));
  };

  if (isAuthenticated()) return <Redirect to={"/"} />;

  return (
    <FormContainer onSubmit={submit}>
      <AuthInputContainer>
        <AuthIcon src={user} />
        <BaseInput
          required={requiredCheck}
          type="email"
          name="email"
          placeholder="Email"
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthIcon src={password} />
        <BaseInput
          required={requiredCheck}
          placeholder={"Password"}
          name="password"
          type="password"
        />
      </AuthInputContainer>
      <SubmitButton />
    </FormContainer>
  );
};

export default LoginForm;

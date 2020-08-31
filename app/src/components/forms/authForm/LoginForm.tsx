import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";

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
import { Redirect } from "react-router-dom";
import AuthenticationContext from "../AuthenticationContext";

const LoginForm = () => {
  const [requiredCheck, setRequired] = useState(false);
  const state = useContext(AuthenticationContext);
  const { addToast } = useToasts();

  const submit = (e: React.FormEvent) => {
    if (!requiredCheck) setRequired(true);

    e.preventDefault();
    state.setIsLoading(true);
    const data = new FormData(e.target as HTMLFormElement);
    login(
      JSON.stringify({
        email: data.get("email"),
        password: data.get("password"),
      })
    )
      .then((loggedIn) => {
        if (!loggedIn) throw new Error("Failed to Login");

        addToast(`Welcome ${localStorage.getItem("name")}`, {
          appearance: "success",
          autoDismiss: true,
        });

        window.location.reload();
      })
      .catch((e) =>
        addToast(`Login Failed: ${e}`, {
          appearance: "error",
          autoDismiss: true,
        })
      )
      .finally(() => state.setIsLoading(false));
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

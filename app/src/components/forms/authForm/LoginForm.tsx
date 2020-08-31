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
import AuthenticationContext from "../../../contexts/AuthenticationContext";
import { useDelayedAlert } from "../../../lib/utility";
import { UserContext } from "../../../contexts/UserContext";

const LoginForm = () => {
  const [requiredCheck, setRequired] = useState(false);
  const state = useContext(AuthenticationContext);
  const { addToast } = useToasts();
  const delayedAlert = useDelayedAlert();
  const userName = useContext(UserContext);

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
      .then(async (loggedIn) => {
        if (!loggedIn) throw new Error("Failed to Login");
        delayedAlert(`Welcome ${localStorage.getItem("name")}`);
        // To execute the function after component is loaded.
        setTimeout(() => userName.setName(localStorage.getItem("name")), 0);
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

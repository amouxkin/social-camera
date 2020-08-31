import React, { useContext, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Redirect, useHistory } from "react-router-dom";

import { FormContainer } from "../styles";
import {
  AuthIcon,
  AuthInputContainer,
  BaseInput,
  SubmitButton,
} from "./styles";
import user from "../../../assets/img/user.svg";
import password from "../../../assets/img/password.svg";
import { isAuthenticated, register } from "../../../lib/authentication";
import AuthenticationContext from "../../../contexts/AuthenticationContext";
import { UserContext } from "../../../contexts/UserContext";

const RegisterFrom = () => {
  const [requiredCheck, setRequired] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const state = useContext(AuthenticationContext);
  const { addToast } = useToasts();
  const userName = useContext(UserContext);

  const submit = (e: React.FormEvent) => {
    if (!requiredCheck) setRequired(true);

    e.preventDefault();
    state.setIsLoading(true);

    const data = new FormData(e.target as HTMLFormElement);

    if (data.get("password") !== passwordConfirmation) {
      return setPasswordConfirmation("");
    }

    register(
      JSON.stringify({
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      })
    )
      .then((registered) => {
        if (!registered) throw new Error("Failed to assign token.");

        addToast(`Welcome ${localStorage.getItem("name")}`, {
          appearance: "success",
          autoDismiss: true,
        });
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
          type="text"
          name="name"
          minLength={3}
          placeholder="Full Name"
        />
      </AuthInputContainer>
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
          minLength={8}
          required={requiredCheck}
          placeholder={"Password"}
          name="password"
          type="password"
        />
      </AuthInputContainer>
      <AuthInputContainer>
        <AuthIcon src={password} />
        <BaseInput
          value={passwordConfirmation}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPasswordConfirmation(e.target.value)
          }
          required={requiredCheck}
          placeholder={"Password Confirmation"}
          name="passwordConfirmation"
          type="password"
        />
      </AuthInputContainer>
      <SubmitButton />
    </FormContainer>
  );
};

export default RegisterFrom;

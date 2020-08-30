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

const RegisterFrom = () => {
  const [requiredCheck, setRequired] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submit = (e: React.FormEvent) => {
    if (!requiredCheck) setRequired(true);

    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);

    if (data.get("password") !== passwordConfirmation) {
      return setPasswordConfirmation('');
    }

    console.log(data);
  };

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

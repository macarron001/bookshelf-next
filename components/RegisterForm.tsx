import React from "react"
import {
  AuthenticationForm,
  FormBtnContainer,
  FormGroup,
  Label,
  Button,
} from "./styled"

const RegisterForm = () => {
  const handleRegister = () => {
    console.log("register")
  }
  return (
    <AuthenticationForm>
      <FormGroup>
        <Label>Username</Label>
        <input id="username" type="text" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <input id="username" type="text" />
      </FormGroup>
      <FormBtnContainer>
        <Button onClick={handleRegister} type="submit">
          Register
        </Button>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default RegisterForm

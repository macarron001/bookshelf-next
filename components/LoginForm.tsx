import React from "react"
import {
  AuthenticationForm,
  FormBtnContainer,
  FormGroup,
  Label,
  Button,
} from "./styled"

const LoginForm = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { username, password } = event.target.elements

    // onSubmit({
    //   username: username.value,
    //   password: password.value,
    // })
  }

  const handleLogin = () => {
    console.log("Logged successfully")
  }

  const handleRegister = () => {
    console.log("Registered successfully")
  }

  return (
    <AuthenticationForm onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Username</Label>
        <input id="username" type="text" />
      </FormGroup>
      <FormGroup className="form-group">
        <Label>Password</Label>
        <input id="username" type="text" />
      </FormGroup>
      <FormBtnContainer>
        <Button $purple={true} onClick={handleLogin} type="submit">
          Login
        </Button>
      </FormBtnContainer>
    </AuthenticationForm>
  )
}

export default LoginForm

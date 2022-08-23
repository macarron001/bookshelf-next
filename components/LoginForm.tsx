import React from "react"
import Button from "../utils/Button"

interface LoginProps {
  buttonText: string
  onSubmit: (params: any) => any
}

const LoginForm = ({ buttonText, onSubmit }: LoginProps) => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const { username, password } = event.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  const handleLogin = () => {
    console.log("Logged successfully")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input className="input" id="username" type="text" />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input className="input" id="password" type="password" />
      </div>
      <div className="form-button">
        <Button onClick={handleLogin} text={buttonText} type="submit" />
      </div>
    </form>
  )
}

export default LoginForm

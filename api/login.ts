import axios from "axios"

export interface LoginProps {
  username: string
  password: string
}

export const login = async ({ username, password }: LoginProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//login",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: {
      user: {
        username: username,
        password: password,
      },
    },
  })
    .then((response) => {
      const res = response.status
      return res
    })
    .catch((err) => {
      const error = err.response.data
      return error
    })
}

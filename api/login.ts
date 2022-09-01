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
      const users = []
      const user = {
        id: response.data.id,
        username: response.data.username,
        auth: response.headers.authorization,
      }

      users.push(user)

      localStorage.setItem("user", JSON.stringify(user))
      return res
    })
    .catch((err) => {
      const error = err.response.data
      return error
    })
}

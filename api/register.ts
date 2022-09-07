import axios from "axios"

export interface RegisterProps {
  username: string
  password: string
}

export const register = async ({ username, password }: RegisterProps) => {
  return await axios({
    url: "http://127.0.0.1:3001/signup",
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
      const user = {
        id: response.data.id,
        username: response.data.username,
        token: response.headers.authorization,
      }
      const res = response.status
      return [res, user]
    })
    .catch((err) => {
      const error = err.response.data.errors
      return error
    })
}

import axios from "axios"

export interface RegisterProps {
  username: string
  password: string
}

export const register = async ({ username, password }: RegisterProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//signup",
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
      const error = err.response.data.errors
      return error
    })
}

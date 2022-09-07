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
        auth: response.headers.authorization,
      }
      const res = response.status
      const users = JSON.parse(localStorage.getItem("users") || "[]")
      users.push(user)

      localStorage.setItem("users", JSON.stringify(users))
      return [res, user]
    })
    .catch((err) => {
      const error = err.response.data.errors
      return error
    })
}

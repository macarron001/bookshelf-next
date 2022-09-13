import { base } from "../base"

export interface RegisterProps {
  username: string
  password: string
}

export const register = async ({ username, password }: RegisterProps) => {
  return await base
    .request({
      url: "/signup",
      method: "POST",
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
      }
      const token = response.headers.authorization
      const res = response.status

      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem("userToken", JSON.stringify(token))

      return res
    })
    .catch((err) => {
      const error = err.response.data.errors
      return error
    })
}

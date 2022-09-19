import { base } from "api/base"

export interface LoginProps {
  username: string
  password: string
}

export const login = async ({ username, password }: LoginProps) => {
  return await base
    .request({
      url: "/login",
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

      localStorage.setItem("userToken", JSON.stringify(token))
      return user
    })
    .catch((err) => {
      const error = {
        password: err.response.data, // formik only accepts username || password as error
      }

      return error
    })
}

import { base } from "api/base"
import { baseWithAuth } from "./base"
import { UserType } from "api/types"
import { errorHandler } from "api/utils"

export interface LoginProps {
  username: string
  password: string
}

export interface RegisterProps {
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

export const logout = async (): Promise<number> => {
  return await baseWithAuth()
    .request({
      url: "/logout",
      method: "DELETE",
    })
    .then((res) => {
      localStorage.removeItem("userToken")
      return res.status
    })
}

export const whoami = async (): Promise<UserType> => {
  return await baseWithAuth()
    .request({
      url: "/api/current_user",
      method: "GET",
    })
    .then((res) => {
      return res.data
    })
    .catch((error) => {
      errorHandler(error)
    })
}

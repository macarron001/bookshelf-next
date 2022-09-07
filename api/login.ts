import axios from "axios"

export interface LoginProps {
  username: string
  password: string
}

export const login = async ({ username, password }: LoginProps) => {
  return await axios({
    url: "http://127.0.0.1:3001/login",
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

      localStorage.setItem("user", JSON.stringify(user))
      return user
    })
    .catch((err) => {
      const error = {
        password: err.response.data, // formik only accepts username || password as error
      }

      return error
    })
}

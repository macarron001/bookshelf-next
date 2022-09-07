import axios from "axios"
import { Token } from "./types"

export const logout = async ({ token }: Token) => {
  return await axios({
    url: "http://127.0.0.1:3001//logout",
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  }).then((res) => {
    localStorage.removeItem("user")
    return res.status
  })
}

import { baseWithAuth } from "./base"

export const logout = async () => {
  return await baseWithAuth()
    .request({
      url: "/logout",
      method: "DELETE",
    })
    .then((res) => {
      localStorage.removeItem("user")
      localStorage.removeItem("userToken")
      return res.status
    })
}

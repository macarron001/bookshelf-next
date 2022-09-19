import { baseWithAuth } from "../base"

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

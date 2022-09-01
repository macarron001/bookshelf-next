import axios from "axios"

export interface LogoutProps {
  auth: string
}

export const logout = async ({ auth }: LogoutProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//logout",
    method: "DELETE",
    headers: {
      Authorization: auth,
    },
  }).then((res) => {
    localStorage.removeItem("authToken")
    return res.status
  })
}

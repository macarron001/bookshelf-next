import { baseWithAuth } from "api/base"
import { UserType } from "api/types"
import { errorHandler } from "api/utils"

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

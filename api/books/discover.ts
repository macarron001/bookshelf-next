import { baseWithAuth } from "api/base"

export const getDiscover = async () => {
  return await baseWithAuth()
    .request({
      url: "/api/discover",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      console.log(error)
    })
}

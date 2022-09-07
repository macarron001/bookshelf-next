import { baseWithAuth } from "api/base"

export const getReadingList = async () => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
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

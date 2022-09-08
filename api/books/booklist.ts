import { baseWithAuth } from "api/base"

export const getBookList = async () => {
  return await baseWithAuth()
    .request({
      url: "/api/books",
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

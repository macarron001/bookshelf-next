import { baseWithAuth } from "api/base"
import { BookType } from "api/types"

export const getReadingList = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      console.log(res)
      return books
    })
    .catch((error) => {
      console.log(error)
    })
}

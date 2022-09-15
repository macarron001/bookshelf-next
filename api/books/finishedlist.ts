import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const getFinishedList = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "GET",
      params: {
        finish_date: 1,
      },
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const setToRead = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          finish_date: null,
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

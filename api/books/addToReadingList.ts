import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const addToReadingList = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "POST",
      data: {
        user_book: {
          book_id: id,
          start_date: new Date().toISOString(),
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

import { baseWithAuth } from "api/base"
import { BookType } from "api/types"

export const markAsRead = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          finish_date: new Date().toISOString(),
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      console.log(error)
    })
}

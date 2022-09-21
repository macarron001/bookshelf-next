import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const setNotes = async (
  id: number,
  notes: string
): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          notes: notes,
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

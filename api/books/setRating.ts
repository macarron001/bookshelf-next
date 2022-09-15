import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const setRating = async (
  id: number,
  rating: number | null
): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          rating: rating,
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

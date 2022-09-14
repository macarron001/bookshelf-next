import { baseWithAuth } from "api/base"
import { BookType } from "api/types"

export const removeFromList = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "DELETE",
    })
    .then((res) => {
      const book = res.data
      console.log(res)
      return book
    })
    .catch((error) => {
      console.log(error)
    })
}

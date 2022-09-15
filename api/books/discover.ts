import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const getDiscover = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/discover",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

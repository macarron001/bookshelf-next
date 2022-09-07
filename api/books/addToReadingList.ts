import { baseWithAuth } from "api/base"

export const addToReadingList = async (id: number) => {
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
      const books = res.data
      return books
    })
    .catch((error) => {
      console.log(error)
    })
}

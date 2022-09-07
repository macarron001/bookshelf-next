import axios from "axios"

export const toRead = async (token: string, id: number) => {
  return await axios({
    url: "http://127.0.0.1:3001//api/user_books",
    method: "POST",
    data: {
      user_book: {
        book_id: id,
        start_date: new Date().toISOString(),
      },
    },
    headers: {
      Authorization: token,
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

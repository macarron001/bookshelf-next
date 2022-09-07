import axios from "axios"

interface toReadProps {
  id: number
  auth: string
}
export const toRead = async ({ auth, id }: toReadProps) => {
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
      Authorization: auth,
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

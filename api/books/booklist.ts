import axios from "axios"

interface GetBookListProps {
  auth: string
}
export const getBookList = async ({ auth }: GetBookListProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//api/books",
    method: "GET",
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

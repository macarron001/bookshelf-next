import axios from "axios"

interface GetReadingListProps {
  auth: string
}
export const getReadingList = async ({ auth }: GetReadingListProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//api/user_books",
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

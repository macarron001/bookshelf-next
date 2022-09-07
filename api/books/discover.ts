import axios from "axios"

interface GetDiscoverProps {
  auth: string
}
export const getDiscover = async ({ auth }: GetDiscoverProps) => {
  return await axios({
    url: "http://127.0.0.1:3001//api/discover",
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

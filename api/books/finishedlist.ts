import { baseWithAuth } from "api/base"

export const getFinishedList = async () => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "GET",
      params: {
        finish_date: 1,
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

import axios from "axios"

export const getBooks = async ({ auth }) => {
  return await axios({
    url: "http://127.0.0.1:3001//api/books",
    method: "GET",
    headers: {
      Authorization: auth,
    },
  })
    .then((res) => {
      const books = res.data
      localStorage.setItem("books", JSON.stringify(books))
      return books
    })
    .catch((error) => {
      console.log(error)
    })
}

import React, { useEffect } from "react"
import Book from "../../book/Book"
import { getFinishedList } from "api/books"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"
import { errorHandler } from "api/utils"

const FinishedList = () => {
  const { finishedBooks, setFinishedBooks } = useBooks()

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getFinishedList()
      setFinishedBooks(bookList)
    }

    fetchBooks().catch((error) => errorHandler(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {finishedBooks && finishedBooks.length === 0 && (
        <Header list_type={"finished"} />
      )}
      {finishedBooks &&
        finishedBooks.map((book) => {
          return (
            <BookList key={book.title}>
              <Book book={book} section={"finished"} rating={book.rating} />
            </BookList>
          )
        })}
    </>
  )
}

export default FinishedList

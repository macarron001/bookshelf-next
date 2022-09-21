import React, { useEffect } from "react"
import { getReadingList } from "api/books/readinglist"
import Book from "../Book"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"

const ReadingList = () => {
  const { readingBooks, setReadingBooks } = useBooks()

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getReadingList()
      setReadingBooks(bookList)
    }

    fetchBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {readingBooks && readingBooks.length === 0 && (
        <Header list_type={"reading"} />
      )}
      {readingBooks &&
        readingBooks.map((book) => {
          return (
            <BookList key={book.title}>
              <Book book={book} section={"reading"} />
            </BookList>
          )
        })}
    </>
  )
}

export default ReadingList

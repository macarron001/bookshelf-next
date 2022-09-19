import React, { useEffect, Dispatch, SetStateAction } from "react"
import { getReadingList } from "api/books/readinglist"
import Book from "../Book"
import { BookType } from "api/types"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"

interface ReadingListProp {
  setActive: Dispatch<SetStateAction<string>>
}

const ReadingList = ({ setActive }: ReadingListProp) => {
  const { readingBooks, setReadingBooks } = useBooks()

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getReadingList()
      setReadingBooks(bookList)
    }

    fetchBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRemove = (book: BookType) => {
    setReadingBooks((prev) => prev.filter((item) => item.title !== book.title))
  }

  return (
    <>
      {readingBooks && readingBooks.length === 0 && (
        <Header setActive={setActive} list_type={"reading"} />
      )}
      {readingBooks &&
        readingBooks.map((book) => {
          return (
            <BookList key={book.title}>
              <Book book={book} section={"reading"} onRemove={handleRemove} />
            </BookList>
          )
        })}
    </>
  )
}

export default ReadingList

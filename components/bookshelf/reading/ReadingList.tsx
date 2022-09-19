import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { getReadingList } from "api/books/readinglist"
import Book from "../Book"
import { BookType } from "api/types"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"

interface ReadingListProp {
  setActive: Dispatch<SetStateAction<string>>
}

const ReadingList = ({ setActive }: ReadingListProp) => {
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getReadingList()
      setBooks(bookList)
    }

    fetchBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {books && books.length === 0 && (
        <Header setActive={setActive} list_type={"reading"} />
      )}
      {books &&
        books.map((book) => {
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

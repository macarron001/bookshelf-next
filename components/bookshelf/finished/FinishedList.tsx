import React, { useEffect, Dispatch, SetStateAction } from "react"
import Book from "../Book"
import { BookType } from "api/types"
import { getFinishedList } from "api/books/finishedlist"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"

interface ReadingListProp {
  setActive: Dispatch<SetStateAction<string>>
}

const FinishedList = ({ setActive }: ReadingListProp) => {
  const { finishedBooks, setFinishedBooks } = useBooks()

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getFinishedList()
      setFinishedBooks(bookList)
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRemove = (book: BookType) => {
    setFinishedBooks((prev) => prev.filter((item) => item.title !== book.title))
  }

  return (
    <>
      {finishedBooks && finishedBooks.length === 0 && (
        <Header setActive={setActive} list_type={"finished"} />
      )}
      {finishedBooks &&
        finishedBooks.map((book) => {
          return (
            <BookList key={book.title}>
              <Book
                book={book}
                section={"finished"}
                rating={book.rating}
                onRemove={handleRemove}
              />
            </BookList>
          )
        })}
    </>
  )
}

export default FinishedList

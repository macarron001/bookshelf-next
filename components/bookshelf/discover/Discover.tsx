import React, { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import Header from "./Header"
import { BookType } from "api/types"
import Book from "../Book"
import { getDiscover } from "api/books/discover"

const Discover = () => {
  const [books, setBooks] = useState<BookType[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getDiscover()
      setBooks(bookList)
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <SearchBox setIsSearching={setIsSearching} />
      {!isSearching && <Header />}
      {!isSearching &&
        books &&
        books.map((book) => {
          return (
            <div key={book.id}>
              <Book book={book} />
            </div>
          )
        })}
    </>
  )
}

export default Discover

import React, { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import { BookType } from "api/types"
import Book from "../Book"
import { getDiscover } from "api/books/discover"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"

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
      {!isSearching && <Header list_type="discover" />}
      {!isSearching &&
        books &&
        books.map((book) => {
          return (
            <BookList key={book.book_id}>
              <Book book={book} />
            </BookList>
          )
        })}
    </>
  )
}

export default Discover

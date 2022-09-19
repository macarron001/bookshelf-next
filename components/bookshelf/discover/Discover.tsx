import React, { useState, useEffect } from "react"
import SearchBox from "./SearchBox"
import Book from "../Book"
import { getDiscover } from "api/books/discover"
import Header from "../Header"
import { BookList } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"
import { BookType } from "api/types"

const Discover = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const { discoverBooks, setDiscoverBooks } = useBooks()

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getDiscover()
      setDiscoverBooks(bookList)
    }

    fetchBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRemove = (book: BookType) => {
    setDiscoverBooks((prev) => prev.filter((item) => item.title !== book.title))
  }

  return (
    <>
      <SearchBox setIsSearching={setIsSearching} />
      {!isSearching && <Header list_type="discover" />}
      {!isSearching &&
        discoverBooks &&
        discoverBooks.map((book) => {
          return (
            <BookList key={book.book_id}>
              <Book book={book} onRemove={handleRemove} />
            </BookList>
          )
        })}
    </>
  )
}

export default Discover

import React, { useContext, useState } from "react"
import SearchBox from "./SearchBox"
import Header from "./Header"
import { BookInterface } from "../../../api/types"
import { BooksContext } from "../../../context/BooksContext"
import Book from "../Book"

const Discover = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const context = useContext(BooksContext)
  if (!context) {
    return null
  }
  const { books } = context

  return (
    <>
      <SearchBox setIsSearching={setIsSearching} />
      {!isSearching && <Header />}
      {!isSearching &&
        books &&
        books.map((book: BookInterface) => {
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

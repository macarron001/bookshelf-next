import React, { useContext, useState } from "react"
import SearchBox from "./SearchBox"
import Header from "./Header"
import { BooksContext } from "../../../context/BooksContext"
import Book from "../Book"

const Discover = () => {
  const { books } = useContext(BooksContext)
  const [isSearching, setIsSearching] = useState<boolean>(false)

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

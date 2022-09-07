import React, { useContext, useState } from "react"
import SearchBox from "./SearchBox"
import Header from "./Header"
import { BookInterface } from "../../../api/types"
import { BooksContext } from "../../../context/BooksContext"
import Book from "../Book"
import { StatusEnum } from "../../../api/enums"

const Discover = () => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)
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
              {/* <Book book={book} setToRead={setToRead} toRead={toRead}/> */}
              <Book book={book} status={status} setStatus={setStatus} />
            </div>
          )
        })}
    </>
  )
}

export default Discover

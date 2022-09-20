import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"
import { setToRead } from "api/books/setToRead"
import { BookType } from "api/types"
import { ExtendedSideBar, SideButton } from "components/styled/bookshelf"
import React from "react"
import { useBooks } from "context/BookContext"

interface SideBarExtProps {
  book: BookType
  section: string
}

const SideBarExt = ({ book, section }: SideBarExtProps) => {
  const { onRemove } = useBooks()

  const markBook = () => {
    markAsRead(book.user_book_id)
    onRemove(book, "reading")
  }

  const removeBook = () => {
    removeFromList(book.user_book_id)
    onRemove(book, section)
  }

  const unmarkBook = () => {
    setToRead(book.user_book_id)
    onRemove(book, "finished")
  }

  return (
    <>
      {section !== "discover" && (
        <ExtendedSideBar>
          <SideButton>
            {section === "reading" && <button onClick={markBook}>✅</button>}
            {section === "finished" && <button onClick={unmarkBook}>📘</button>}
          </SideButton>
          <SideButton>
            <button onClick={removeBook}>⛔</button>
          </SideButton>
        </ExtendedSideBar>
      )}
    </>
  )
}

export default SideBarExt

import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"
import { setToRead } from "api/books/setToRead"
import { BookType } from "api/types"
import { ExtendedSideBar, SideButton } from "components/styled/bookshelf"
import React from "react"

interface SideBarExtProps {
  book: BookType
  section: string
  onRemove: (book: BookType) => void
}

const SideBarExt = ({ book, section, onRemove }: SideBarExtProps) => {
  const markBook = () => {
    markAsRead(book.user_book_id)
    onRemove(book)
  }

  const removeBook = () => {
    removeFromList(book.user_book_id)
    onRemove(book)
  }

  const unmarkBook = () => {
    setToRead(book.user_book_id)
    onRemove(book)
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

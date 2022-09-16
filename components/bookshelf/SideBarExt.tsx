import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"
import { setToRead } from "api/books/setToRead"
import { ExtendedSideBar } from "components/styled/bookshelf"
import React from "react"

interface SideBarExtProps {
  user_book_id: number
  section: string
}

const SideBarExt = ({ user_book_id, section }: SideBarExtProps) => {
  const markBook = () => {
    markAsRead(user_book_id)
  }

  const removeBook = () => {
    removeFromList(user_book_id)
  }

  const unmarkBook = () => {
    setToRead(user_book_id)
  }

  return (
    <>
      {section !== "discover" && (
        <ExtendedSideBar>
          {section === "reading" && <button onClick={markBook}>✅</button>}
          {section === "finished" && <button onClick={unmarkBook}>📘</button>}
          <button onClick={removeBook}>⛔</button>
        </ExtendedSideBar>
      )}
    </>
  )
}

export default SideBarExt

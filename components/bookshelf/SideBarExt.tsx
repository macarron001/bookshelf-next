import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"
import { setToRead } from "api/books/setToRead"
import { ExtendedSideBar, SideButton } from "components/styled/bookshelf"
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

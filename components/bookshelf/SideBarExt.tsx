import React, { Dispatch, SetStateAction } from "react"
import { markAsRead } from "api/books"
import { removeFromList } from "api/books"
import { setToRead } from "api/books"
import { BookType } from "api/types"
import { ExtendedSideBar } from "components/styled/bookshelf"
import { useBooks } from "context/BookContext"
import { ButtonText, SideButton } from "components/book/style"
import { HoverTextEnum } from "api/enums"

interface SideBarExtProps {
  book: BookType
  section: string
  isHovered: HoverTextEnum | string
  setIsHovered: Dispatch<SetStateAction<HoverTextEnum | string>>
}

const SideBarExt = ({
  book,
  section,
  isHovered,
  setIsHovered,
}: SideBarExtProps) => {
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
            {section === "reading" && (
              <button
                onClick={markBook}
                onMouseEnter={() => setIsHovered(HoverTextEnum.read)}
              >
                ✅
              </button>
            )}
            {isHovered === HoverTextEnum.read && (
              <ButtonText>Mark as read</ButtonText>
            )}
            {section === "finished" && (
              <button
                onClick={unmarkBook}
                onMouseEnter={() => setIsHovered(HoverTextEnum.unread)}
              >
                📘
              </button>
            )}
            {isHovered === HoverTextEnum.unread && (
              <ButtonText>Mark as unread</ButtonText>
            )}
          </SideButton>
          <SideButton>
            <button
              onClick={removeBook}
              onMouseEnter={() => setIsHovered(HoverTextEnum.remove)}
            >
              ⛔
            </button>
            {isHovered === HoverTextEnum.remove && (
              <ButtonText>Remove</ButtonText>
            )}
          </SideButton>
        </ExtendedSideBar>
      )}
    </>
  )
}

export default SideBarExt

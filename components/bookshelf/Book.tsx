import React, { useState } from "react"
import Image from "next/image"
import {
  BookCard,
  BookContent,
  BookImage,
  HeaderBar,
  InfoBox,
  Author,
  Publisher,
  Title,
  Synopsis,
  SideBar,
  ExtendedSideBar,
} from "../styled/bookshelf"
import { BookType } from "api/types"
import { StatusEnum } from "api/enums"
import { addToReadingList } from "api/books/addToReadingList"
import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"

interface BookProps {
  book: BookType
  section?: "reading" | "finished" | "discover"
}

const Book = ({ book, section = "discover" }: BookProps) => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)

  const addToList = () => {
    setStatus(StatusEnum.loading)
    addToReadingList(book.book_id).then(() => {
      setStatus(StatusEnum.reading)
    })
  }

  const markBook = () => {
    markAsRead(book.user_book_id)
  }

  const removeBook = () => {
    removeFromList(book.user_book_id)
  }

  const unmarkBook = () => {
    console.log("book unmarked")
  }

  return (
    <>
      <BookCard>
        <BookImage>
          <Image
            src={`${book.cover_image_url}`}
            alt=""
            width={100}
            height={150}
          />
        </BookImage>
        <BookContent>
          <HeaderBar>
            <Title>{book.title}</Title>
            <InfoBox>
              <Author>{book.author}</Author>
              <Publisher>{book.publisher}</Publisher>
            </InfoBox>
          </HeaderBar>
          <Synopsis>{book.synopsis}</Synopsis>
        </BookContent>
        <SideBar>
          {status === StatusEnum.in_list && section === "discover" && (
            <button onClick={addToList}>
              <Image src={"/plus.png"} alt="" width={20} height={20} />
            </button>
          )}
          {status === StatusEnum.loading && (
            <Image
              className="bg-transparent opacity-30"
              src={"/spinner.gif"}
              alt=""
              width={20}
              height={20}
            />
          )}
          {(status === StatusEnum.reading || section === "reading") && (
            <ExtendedSideBar>
              <button onClick={markBook}>✅</button>
              <button onClick={removeBook}>⛔</button>
            </ExtendedSideBar>
          )}
          {(status === StatusEnum.reading || section === "finished") && (
            <ExtendedSideBar>
              <button onClick={unmarkBook}>📘</button>
              <button onClick={removeBook}>⛔</button>
            </ExtendedSideBar>
          )}
        </SideBar>
      </BookCard>
    </>
  )
}

export default Book

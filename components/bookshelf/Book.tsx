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
import Rating from "@mui/material/Rating"
import { setRating } from "api/books/setRating"

interface BookProps {
  book: BookType
  section?: "reading" | "finished" | "discover"
  rating?: number | null
}

const Book = ({ book, rating, section = "discover" }: BookProps) => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)
  const [currentRating, setCurrentRating] = useState<number | null>(rating)

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

  const rateBook = (_event, newRating: number | null) => {
    setCurrentRating(newRating)
    setRating(book.user_book_id, newRating)
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
            {(status === StatusEnum.reading || section === "finished") && (
              <>
                <Rating
                  name="simple-controlled"
                  size="small"
                  value={currentRating}
                  onChange={rateBook}
                />
              </>
            )}
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
          {(status === StatusEnum.reading ||
            section === "reading" ||
            "finished") && (
            <ExtendedSideBar>
              {section === "finished" ? (
                <button onClick={unmarkBook}>📘</button>
              ) : (
                <button onClick={markBook}>✅</button>
              )}
              <button onClick={removeBook}>⛔</button>
            </ExtendedSideBar>
          )}
        </SideBar>
      </BookCard>
    </>
  )
}

export default Book

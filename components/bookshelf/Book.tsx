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
} from "../styled/bookshelf"
import { BookType } from "api/types"
import { StatusEnum } from "api/enums"
import { addToReadingList } from "api/books/addToReadingList"
import Rating from "@mui/material/Rating"
import { setRating } from "api/books/setRating"
import SideBarExt from "./SideBarExt"

interface BookProps {
  book: BookType
  section?: "reading" | "finished" | "discover"
  rating?: number | null
}

const Book = ({ book, rating, section = "discover" }: BookProps) => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)
  const [currentRating, setCurrentRating] = useState<number | null>(rating)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addToList = () => {
    setStatus(StatusEnum.loading)
    addToReadingList(book.book_id).then(() => {
      setStatus(StatusEnum.reading)
    })
  }

  const rateBook = (_event, newRating: number | null) => {
    setCurrentRating(newRating)
    setIsLoading(true)
    setRating(book.user_book_id, newRating).then(() => {
      setIsLoading(false)
    })
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
              <Rating
                name="simple-controlled"
                size="small"
                value={currentRating}
                onChange={rateBook}
                disabled={isLoading ? true : false}
              />
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
          {status === StatusEnum.reading ||
            ((section === "reading" || "finished") && (
              <SideBarExt section={section} user_book_id={book.user_book_id} />
            ))}
        </SideBar>
      </BookCard>
    </>
  )
}

export default Book

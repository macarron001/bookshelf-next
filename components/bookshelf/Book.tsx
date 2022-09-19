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
  BookContainer,
  TitleBar,
  RatingContainer,
  SideButton,
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
    <BookContainer>
      <BookCard>
        <BookImage>
          <Image
            src={`${book.cover_image_url}`}
            alt=""
            width={140}
            height={210}
          />
        </BookImage>
        <BookContent>
          <HeaderBar>
            <TitleBar>
              <Title>{book.title}</Title>
              {(status === StatusEnum.reading || section === "finished") && (
                <RatingContainer>
                  <Rating
                    name="simple-controlled"
                    size="small"
                    value={currentRating}
                    onChange={rateBook}
                    disabled={isLoading ? true : false}
                  />
                </RatingContainer>
              )}
            </TitleBar>
            <InfoBox>
              <Author>{book.author}</Author>
              <Publisher>{book.publisher}</Publisher>
            </InfoBox>
          </HeaderBar>
          <Synopsis>{book.synopsis}</Synopsis>
        </BookContent>
      </BookCard>
      <SideBar>
        {status === StatusEnum.in_list && section === "discover" && (
          <SideButton onClick={addToList}>
            <Image src={"/plus.png"} alt="" width={18} height={18} />
          </SideButton>
        )}
        {status === StatusEnum.loading && (
          <SideButton>
            <Image
              className="bg-transparent opacity-30"
              src={"/spinner.gif"}
              alt=""
              width={20}
              height={20}
            />
          </SideButton>
        )}
        {status === StatusEnum.reading ||
          ((section === "reading" || "finished") && (
            <SideBarExt section={section} user_book_id={book.user_book_id} />
          ))}
      </SideBar>
    </BookContainer>
  )
}

export default Book

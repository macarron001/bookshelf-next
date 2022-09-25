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
  ButtonText,
} from "./style"
import { BookType } from "api/types"
import { HoverTextEnum, StatusEnum } from "api/enums"
import { addToReadingList } from "api/books"
import Rating from "@mui/material/Rating"
import { setRating } from "api/books"
import SideBarExt from "../bookshelf/SideBarExt"
import { useBooks } from "context/BookContext"
import { refreshRating } from "api/utils"

interface BookProps {
  book: BookType
  section?: "reading" | "finished" | "discover"
  rating?: number | null
}

const Book = ({ book, rating, section = "discover" }: BookProps) => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)
  const [isHovered, setIsHovered] = useState<HoverTextEnum | string>("")
  const [currentRating, setCurrentRating] = useState<number | null>(rating)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    setSelectedBook,
    setIsBookSelected,
    onRemove,
    setActive,
    finishedBooks,
  } = useBooks()

  const addToList = () => {
    setStatus(StatusEnum.loading)
    addToReadingList(book.id).then(() => {
      setStatus(StatusEnum.reading)
      onRemove(book, "discover")
    })
  }

  const rateBook = (_event, newRating: number | null) => {
    if (newRating !== null) {
      setCurrentRating(newRating)
      setIsLoading(true)
      setRating(book.user_book_id, newRating).then(() => {
        setIsLoading(false)
        refreshRating(newRating, book, finishedBooks)
      })
    }
  }

  const handleBookSelect = () => {
    setSelectedBook(book)
    setIsBookSelected(true)
    setActive("Detailed Book")
  }

  const removeHover = () => {
    setIsHovered("")
  }

  return (
    <BookContainer>
      <BookCard>
        <BookImage onClick={handleBookSelect}>
          <Image
            src={`${book.cover_image_url}`}
            alt=""
            width={100}
            height={150}
          />
        </BookImage>
        <BookContent>
          <HeaderBar>
            <TitleBar>
              <Title onClick={handleBookSelect}>{book.title}</Title>
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
          <Synopsis onClick={handleBookSelect}>{book.synopsis}</Synopsis>
        </BookContent>
      </BookCard>
      <SideBar onMouseLeave={removeHover}>
        {status === StatusEnum.in_list && section === "discover" && (
          <SideButton onClick={addToList}>
            <Image
              src={"/plus.png"}
              alt=""
              width={18}
              height={18}
              onMouseEnter={() => setIsHovered(HoverTextEnum.add)}
            />
            {isHovered === HoverTextEnum.add && (
              <ButtonText>Add to List</ButtonText>
            )}
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
            <SideBarExt
              section={section}
              book={book}
              isHovered={isHovered}
              setIsHovered={setIsHovered}
            />
          ))}
      </SideBar>
    </BookContainer>
  )
}

export default Book

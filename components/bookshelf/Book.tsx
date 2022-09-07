import React, { Dispatch, SetStateAction, useState } from "react"
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
import { BookInterface } from "../../api/types"
import { StatusEnum } from "../../api/enums"

interface BookProps {
  book: BookInterface
  status: string
  setStatus: Dispatch<SetStateAction<string>>
}

const Book = ({ book, status, setStatus }: BookProps) => {
  const addToList = () => {
    setStatus(StatusEnum.loading)
    setTimeout(() => {
      setStatus(StatusEnum.reading) //API CALL
    }, 2500)
  }

  const markAsRead = () => {
    console.log("to read")
  }

  const removeFromList = () => {
    console.log("remove from list")
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
          {status === StatusEnum.in_list && (
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
          {status === StatusEnum.reading && (
            <ExtendedSideBar>
              <button onClick={markAsRead}>✅</button>
              <button onClick={removeFromList}>⛔</button>
            </ExtendedSideBar>
          )}
        </SideBar>
      </BookCard>
    </>
  )
}

export default Book

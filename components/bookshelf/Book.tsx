import React, { useContext, useState } from "react"
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
import { BookType } from "../../api/types"
import { StatusEnum } from "../../api/enums"
import { addToReadingList } from "../../api/books/addToReadingList"
import { UserContext } from "./../../context/UserContext"

interface BookProps {
  book: BookType
  reading?: boolean
}

const Book = ({ book, reading = false }: BookProps) => {
  const [status, setStatus] = useState<StatusEnum | string>(StatusEnum.in_list)
  const { user } = useContext(UserContext)

  const addToList = () => {
    setStatus(StatusEnum.loading)
    addToReadingList(user.token, book.id).then(() => {
      setStatus(StatusEnum.reading)
    })
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
          {status === StatusEnum.in_list && !reading && (
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
          {(status === StatusEnum.reading || reading) && (
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

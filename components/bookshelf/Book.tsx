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

const Book = ({ book }) => {
  const [isAdding, setIsAdding] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const addToList = () => {
    setIsAdding(true)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
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
          {!isAdding && !isLoading && (
            <button onClick={addToList}>
              <Image src={"/plus.png"} alt="" width={20} height={20} />
            </button>
          )}
          {isLoading && (
            <Image
              className="bg-transparent opacity-30"
              src={"/spinner.gif"}
              alt=""
              width={20}
              height={20}
            />
          )}
          {isAdding && !isLoading && (
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

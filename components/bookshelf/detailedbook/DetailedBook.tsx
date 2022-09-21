import { BookType } from "api/types"
import {
  BookContainer,
  BookHeader,
  BookImageContainer,
  BookTitle,
  BookTitleBox,
  DateContainer,
  Divider,
  ItalicizedContainer,
  ItalicizedText,
  SideBtn,
  SideButtonContainer,
  Synopsis,
  WhiteSpace,
} from "./style"
import React, { useState } from "react"
import Image from "next/image"
import { Rating } from "@mui/material"
import Moment from "moment"
import { setRating } from "api/books/setRating"
import { ExtendedSideBar, SideButton } from "components/styled/bookshelf"
import { markAsRead } from "api/books/markAsRead"
import { removeFromList } from "api/books/removeFromList"
import { setToRead } from "api/books/setToRead"
import { addToReadingList } from "api/books/addToReadingList"
import { checkRating, checkID, checkFinishDate } from "./utils"

interface DetailedBookProps {
  book: BookType
}

const DetailedBook = ({ book }: DetailedBookProps) => {
  const [currentRating, setCurrentRating] = useState<number>(() =>
    checkRating(book)
  )
  const [userBookID, setUserBookID] = useState<number | null>(() =>
    checkID(book)
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(() => {
    return checkFinishDate(book)
  })

  const rateBook = (_event, newRating: number | null) => {
    if (newRating !== null) {
      setCurrentRating(newRating)
      setIsLoading(true)
      if (userBookID) {
        setRating(userBookID, newRating).then(() => {
          setIsLoading(false)
        })
      }
    }
  }

  const addToList = () => {
    addToReadingList(book.book_id).then((res) => {
      setUserBookID(res.user_book_id)
    })
  }

  const markBook = () => {
    if (userBookID) {
      markAsRead(userBookID).then(() => {
        setIsFinished(true)
      })
    }
  }

  const removeBook = () => {
    if (userBookID) {
      removeFromList(userBookID).then(() => {
        setIsFinished(false)
        setUserBookID(null)
      })
    }
  }

  const unmarkBook = () => {
    if (userBookID) {
      setToRead(userBookID).then(() => {
        setIsFinished(false)
      })
    }
  }

  return (
    <div>
      <BookContainer>
        <BookImageContainer>
          <Image
            src={`${book.cover_image_url}`}
            alt=""
            width={224}
            height={337.69}
          />
        </BookImageContainer>
        <div>
          <BookHeader>
            <BookTitleBox>
              <BookTitle>{book.title}</BookTitle>
              <ItalicizedContainer>
                <ItalicizedText>{book.author}</ItalicizedText>
                <Divider>|</Divider>
                <ItalicizedText>{book.publisher}</ItalicizedText>
              </ItalicizedContainer>
            </BookTitleBox>
            <SideButtonContainer>
              {userBookID ? (
                <ExtendedSideBar>
                  <SideButton>
                    {isFinished ? (
                      <button onClick={unmarkBook}>📘</button>
                    ) : (
                      <button onClick={markBook}>✅</button>
                    )}
                  </SideButton>
                  <SideButton>
                    <button onClick={removeBook}>⛔</button>
                  </SideButton>
                </ExtendedSideBar>
              ) : (
                <SideBtn onClick={addToList}>
                  <Image src={"/plus.png"} alt="" width={18} height={18} />
                </SideBtn>
              )}
            </SideButtonContainer>
          </BookHeader>
          <WhiteSpace>
            {userBookID && isFinished && (
              <Rating
                name="simple-controlled"
                size="small"
                value={currentRating}
                onChange={rateBook}
                disabled={isLoading ? true : false}
              />
            )}
            {userBookID && (
              <DateContainer>
                📅 <span>{Moment(book.start_date).format("MMM D")}</span>
                {isFinished && (
                  <span> --- {Moment(book.finish_date).format("MMM D")}</span>
                )}
              </DateContainer>
            )}
          </WhiteSpace>
          {userBookID && <br />}
          <Synopsis>{book.synopsis}</Synopsis>
        </div>
      </BookContainer>
    </div>
  )
}

export default DetailedBook

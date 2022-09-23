import React, { SyntheticEvent, useState } from "react"
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
  NotesContainer,
  NoteTitle,
  SideBtn,
  SideButtonContainer,
  Synopsis,
  TextArea,
  WhiteSpace,
} from "./style"
import Image from "next/image"
import { Rating } from "@mui/material"
import Moment from "moment"
import { setRating } from "api/books"
import { ExtendedSideBar } from "components/styled/bookshelf"
import { markAsRead } from "api/books"
import { removeFromList } from "api/books"
import { setToRead } from "api/books"
import { addToReadingList } from "api/books"
import {
  checkRating,
  checkID,
  checkFinishDate,
  checkNotes,
  refreshRating,
} from "api/utils"
import { setNotes } from "api/books"
import { useBooks } from "context/BookContext"
import { SideButton } from "components/book/style"

interface DetailedBookProps {
  book: BookType
}

const DetailedBook = ({ book }: DetailedBookProps) => {
  const { finishedBooks } = useBooks()
  const [currentRating, setCurrentRating] = useState<number>(() =>
    checkRating(book)
  )
  const [userBookID, setUserBookID] = useState<number | null>(() =>
    checkID(book)
  )
  const [text, setText] = useState<string>(() => checkNotes(book))
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean | string>(() => {
    return checkFinishDate(book)
  })

  const rateBook = (
    _event: SyntheticEvent<Element, Event>,
    newRating: number | null
  ) => {
    if (newRating !== null) {
      setCurrentRating(newRating)
      setIsLoading(true)
      if (userBookID) {
        setRating(userBookID, newRating).then(() => {
          setIsLoading(false)
          refreshRating(newRating, book, finishedBooks)
        })
      }
    }
  }

  const addToList = () => {
    addToReadingList(book.id).then((res) => {
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

  const updateNotes = (e) => {
    setText(e.target.value)
  }

  const handleBlur = () => {
    if (userBookID) {
      setNotes(userBookID, text)
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
      {userBookID && (
        <NotesContainer>
          <NoteTitle>Notes</NoteTitle>
          <TextArea value={text} onChange={updateNotes} onBlur={handleBlur} />
        </NotesContainer>
      )}
    </div>
  )
}

export default DetailedBook

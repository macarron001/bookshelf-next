import { BookType } from "api/types"

export const checkRating = (book: BookType) => {
  if (book.rating) {
    return book.rating
  }
  return 0
}

export const checkID = (book: BookType) => {
  if (book.user_book_id) {
    return book.user_book_id
  }
  return null
}

export const checkFinishDate = (book: BookType) => {
  if (book.finish_date) {
    return true
  }
  return false
}

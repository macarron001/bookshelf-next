import { ToastMessage } from "components/toast"
import { BookType } from "api/types"

export interface genericError {
  message: string
  request: { status: number }
}

export const errorHandler = (error: genericError) => {
  let error_message = "error message" //placeholder for TS
  switch (error.request.status) {
    case 0:
      error_message = "Network error - is the server running?"
      break
    case 500:
      error_message = "Request failed - check the server"
      break
    case 404:
      error_message = "Data not found - check request parameters"
      break
    case 401:
      error_message = "Unauthorized - login first!"
      break
    default:
      error_message = error.message
  }

  ToastMessage({
    type: "error",
    message: error_message,
  })
}

export const checkRating = (book: BookType) => {
  return book.rating ? book.rating : 0
}

export const checkID = (book: BookType) => {
  return book.user_book_id ? book.user_book_id : null
}

export const checkFinishDate = (book: BookType) => {
  return book.finish_date
}

export const checkNotes = (book: BookType) => {
  return book.notes ? book.notes : ""
}

export const refreshRating = (
  rating: number,
  book: BookType,
  finished_books: BookType[]
) => {
  const index = finished_books.findIndex(
    (item) => item.user_book_id == book.user_book_id
  )
  finished_books[index].rating = rating
}

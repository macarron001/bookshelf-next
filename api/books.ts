import { baseWithAuth } from "api/base"
import { BookType } from "api/types"
import { errorHandler } from "api/utils"

export const addToReadingList = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "POST",
      data: {
        user_book: {
          book_id: id,
          start_date: new Date().toISOString(),
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const getBookList = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/books",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const getDiscover = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/discover",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const getFinishedList = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "GET",
      params: {
        finish_date: 1,
      },
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const markAsRead = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          finish_date: new Date().toISOString(),
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const getReadingList = async (): Promise<BookType[]> => {
  return await baseWithAuth()
    .request({
      url: "/api/user_books",
      method: "GET",
    })
    .then((res) => {
      const books = res.data
      return books
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const removeFromList = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "DELETE",
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const setNotes = async (
  id: number,
  notes: string
): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          notes: notes,
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const setRating = async (
  id: number,
  rating: number | null
): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          rating: rating,
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

export const setToRead = async (id: number): Promise<BookType> => {
  return await baseWithAuth()
    .request({
      url: `/api/user_books/${id}`,
      method: "PATCH",
      data: {
        user_book: {
          finish_date: null,
        },
      },
    })
    .then((res) => {
      const book = res.data
      return book
    })
    .catch((error) => {
      errorHandler(error)
    })
}

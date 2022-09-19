import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react"

import { BookType } from "api/types"

type BookContextType = {
  discoverBooks: BookType[]
  finishedBooks: BookType[]
  readingBooks: BookType[]
  setDiscoverBooks: Dispatch<SetStateAction<BookType[]>>
  setFinishedBooks: Dispatch<SetStateAction<BookType[]>>
  setReadingBooks: Dispatch<SetStateAction<BookType[]>>
}

const BookContext = createContext<BookContextType | null>(null)

const useBooks = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error(`useAlertModals must be used within an AlertModalContext`)
  }
  return context
}

const BookProvider = ({ children }: { children?: ReactNode }) => {
  const [discoverBooks, setDiscoverBooks] = useState<BookType[]>([])
  const [finishedBooks, setFinishedBooks] = useState<BookType[]>([])
  const [readingBooks, setReadingBooks] = useState<BookType[]>([])

  const value = {
    discoverBooks: discoverBooks,
    finishedBooks: finishedBooks,
    readingBooks: readingBooks,
    setFinishedBooks: setFinishedBooks,
    setReadingBooks: setReadingBooks,
    setDiscoverBooks: setDiscoverBooks,
  }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export { BookProvider, useBooks, BookContext }

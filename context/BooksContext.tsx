import React, {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react"

import { BooksInterface } from "../api/types"

type BooksContextType = {
  books: BooksInterface | null
  setBooks: Dispatch<SetStateAction<BooksInterface | null>>
}

export const BooksContext = createContext<BooksContextType | null>(null)

export const BooksProvider = ({ children }: { children?: ReactNode }) => {
  const [books, setBooks] = useState<BooksInterface | null>(null)

  const value = {
    books: books,
    setBooks: setBooks,
  }

  return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
}

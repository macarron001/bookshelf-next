import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react"

import { BookType } from "api/types"
import { ActivePageEnum } from "api/enums"

type BookContextType = {
  discoverBooks: BookType[]
  finishedBooks: BookType[]
  readingBooks: BookType[]
  selectedBook: BookType
  isBookSelected: boolean
  active: ActivePageEnum | string
  setDiscoverBooks: Dispatch<SetStateAction<BookType[]>>
  setFinishedBooks: Dispatch<SetStateAction<BookType[]>>
  setReadingBooks: Dispatch<SetStateAction<BookType[]>>
  setSelectedBook: Dispatch<SetStateAction<BookType>>
  setIsBookSelected: Dispatch<SetStateAction<boolean>>
  setActive: Dispatch<SetStateAction<ActivePageEnum | string>>
  onRemove: (book: BookType, list_type: string) => void
}

const BookContext = createContext<BookContextType | null>(null)

const useBooks = () => {
  const context = useContext(BookContext)
  if (!context) {
    throw new Error(`useBooks must be used within a BookContextProvider`)
  }
  return context
}

const initialBook = {
  user_book_id: 123123,
  title: "book title",
  author: "book author",
  cover_image_url: "cover image",
  publisher: "book publisher",
  synopsis: "book synopsis",
  rating: 0,
  start_date: "start",
  finish_date: "finish",
  book_id: 123123,
  notes: "notes",
}

const BookProvider = ({ children }: { children?: ReactNode }) => {
  const [discoverBooks, setDiscoverBooks] = useState<BookType[]>([])
  const [finishedBooks, setFinishedBooks] = useState<BookType[]>([])
  const [readingBooks, setReadingBooks] = useState<BookType[]>([])
  const [selectedBook, setSelectedBook] = useState<BookType>(initialBook)
  const [isBookSelected, setIsBookSelected] = useState<boolean>(false)
  const [active, setActive] = useState<ActivePageEnum | string>(
    ActivePageEnum.to_read
  )

  const onRemove = (book: BookType, list_type: string) => {
    switch (list_type) {
      case "discover":
        setDiscoverBooks((prev) =>
          prev.filter((item) => item.title !== book.title)
        )
        break
      case "reading":
        setReadingBooks((prev) =>
          prev.filter((item) => item.title !== book.title)
        )
        break
      case "finished":
        setFinishedBooks((prev) =>
          prev.filter((item) => item.title !== book.title)
        )
        break
    }
  }

  const value = {
    discoverBooks: discoverBooks,
    finishedBooks: finishedBooks,
    readingBooks: readingBooks,
    selectedBook: selectedBook,
    active: active,
    isBookSelected: isBookSelected,
    setFinishedBooks: setFinishedBooks,
    setReadingBooks: setReadingBooks,
    setDiscoverBooks: setDiscoverBooks,
    setSelectedBook: setSelectedBook,
    setIsBookSelected: setIsBookSelected,
    onRemove: onRemove,
    setActive: setActive,
  }

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>
}

export { BookProvider, useBooks, BookContext }

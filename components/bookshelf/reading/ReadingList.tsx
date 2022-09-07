import React, {
  useState,
  useEffect,
  useContext,
  Dispatch,
  SetStateAction,
} from "react"
import { UserContext } from "./../../../context/UserContext"
import { getReadingList } from "../../../api/books/readinglist"
import Header from "./Header"
import Book from "../Book"

interface ReadingListProp {
  setActive: Dispatch<SetStateAction<string>>
}

const ReadingList = ({ setActive }: ReadingListProp) => {
  const [books, setBooks] = useState([])
  const { user } = useContext(UserContext)

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getReadingList(user)
      setBooks(bookList)
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {books && books.length === 0 && <Header setActive={setActive} />}
      {books &&
        books.map((book) => {
          return (
            <div key={book.title}>
              <Book book={book} reading={true} />
            </div>
          )
        })}
    </>
  )
}

export default ReadingList

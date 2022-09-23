import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import { SearchButton, SearchForm, SearchInput, SearchLabel } from "./style"
import Book from "../../book/Book"
import { BookType } from "api/types"
import { getBookList } from "api/books"
import { BookList } from "components/styled/bookshelf"
import { ToastMessage } from "components/toast"

interface SearchBoxProps {
  setIsSearching: Dispatch<SetStateAction<boolean>>
}

const SearchBox = ({ setIsSearching }: SearchBoxProps) => {
  const [filteredData, setFilteredData] = useState<BookType[]>()
  const [searchInput, setSearchInput] = useState<string>("")
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getBookList()
      setBooks(bookList)
    }

    fetchBooks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchInput) {
      const filteredBooks = books.filter((book: BookType) => {
        return book.title.toLowerCase().includes(searchInput?.toLowerCase())
      })
      setFilteredData(filteredBooks)
      setIsSearching(true)
    } else {
      ToastMessage({ type: "error", message: "Search field cannot be empty" })
    }
  }

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          placeholder="Search books..."
          onChange={handleChange}
          value={searchInput}
        />
        <SearchLabel>
          <SearchButton>🔍</SearchButton>
        </SearchLabel>
      </SearchForm>
      {filteredData &&
        filteredData.map((data) => {
          return (
            <BookList key={data.title}>
              <Book book={data} />
            </BookList>
          )
        })}
    </>
  )
}

export default SearchBox

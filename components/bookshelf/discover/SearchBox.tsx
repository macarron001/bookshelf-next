import React, { useState, useEffect, Dispatch, SetStateAction } from "react"
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchLabel,
} from "../../styled/bookshelf"
import Book from "../Book"
import { BookType } from "api/types"
import { getBookList } from "api/books/booklist"

interface SearchBoxProps {
  setIsSearching: Dispatch<SetStateAction<boolean>>
}

type SearchInputType = {
  searchInput?: string
  setSearchInput: Dispatch<SetStateAction<string | null>>
}

const SearchBox = ({ setIsSearching }: SearchBoxProps) => {
  const [filteredData, setFilteredData] = useState<BookType[]>()
  const [searchInput, setSearchInput] = useState<SearchInputType>()
  const [books, setBooks] = useState<BookType[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      const bookList = await getBookList()
      setBooks(bookList)
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredBooks = books.filter((book: BookType) => {
      return book.title.toLowerCase().includes(searchInput?.toLowerCase())
    })
    setFilteredData(filteredBooks)
    setIsSearching(true)
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
            <div key={data.title}>
              <Book book={data} />
            </div>
          )
        })}
    </>
  )
}

export default SearchBox

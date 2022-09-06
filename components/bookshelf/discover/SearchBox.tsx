import React, { useState, useContext, Dispatch, SetStateAction } from "react"
import {
  SearchButton,
  SearchForm,
  SearchInput,
  SearchLabel,
} from "../../styled/bookshelf"
import { BooksContext } from "./../../../context/BooksContext"
import Book from "../Book"
import { BookInterface } from "../../../api/types"

interface SearchBoxProps {
  setIsSearching: Dispatch<SetStateAction<boolean | null>>
}

const SearchBox = ({ setIsSearching }: SearchBoxProps) => {
  const [filteredData, setFilteredData] = useState()
  const [searchInput, setSearchInput] = useState()
  const context = useContext(BooksContext)
  if (!context) {
    return null
  }
  const { books } = context

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const filteredBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchInput.toLowerCase())
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
        filteredData.map((data: BookInterface) => {
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

import tw from "tailwind-styled-components"

const SearchForm = tw.form`
  w-full
  p-0
  mt-0
`
const SearchInput = tw.input`
  w-full
  mx-0
  mb-[10px]
`
const SearchLabel = tw.label`
  inline-block
`

const SearchButton = tw.button`
  border-0
  relative
  ml-[-35px]
  bg-transparent
  cursor-pointer
`

export { SearchForm, SearchButton, SearchInput, SearchLabel }

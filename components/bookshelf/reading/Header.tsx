import React, { Dispatch, SetStateAction } from "react"
import { HeaderLink, ReadingHeader } from "../../styled/bookshelf"

interface HeaderProp {
  setActive: Dispatch<SetStateAction<string>>
}

const Header = ({ setActive }: HeaderProp) => {
  const handleClick = () => {
    setActive("Discover")
  }
  return (
    <ReadingHeader>
      <span>
        Hey there! Welcome to your bookshelf reading list. Get started by
        heading over to{" "}
      </span>
      <HeaderLink onClick={handleClick}>the Discover page</HeaderLink>
      <span> to add books to your list.</span>
    </ReadingHeader>
  )
}

export default Header

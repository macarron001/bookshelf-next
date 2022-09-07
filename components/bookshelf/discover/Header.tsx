import React from "react"
import { HeaderBox, HeaderItem } from "../../styled/bookshelf"

const Header = () => {
  return (
    <HeaderBox>
      <HeaderItem>Welcome to the new discover page.</HeaderItem>
      <HeaderItem>Here, let me load a few books for you...</HeaderItem>
      <HeaderItem>
        Here you go! Find more books with the search bar above.
      </HeaderItem>
    </HeaderBox>
  )
}

export default Header

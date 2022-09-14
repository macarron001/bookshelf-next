import {
  HeaderBox,
  HeaderItem,
  HeaderLink,
  ReadingHeader,
} from "components/styled/bookshelf"
import React, { Dispatch, SetStateAction } from "react"

interface HeaderProp {
  setActive?: Dispatch<SetStateAction<string>>
  list_type: "discover" | "reading" | "finished"
}

const Header = ({ setActive, list_type }: HeaderProp) => {
  const handleDiscover = () => {
    setActive?.("Discover")
  }

  const handleReading = () => {
    setActive?.("Reading List")
  }
  return (
    <>
      {list_type === "discover" && (
        <>
          <HeaderBox>
            <HeaderItem>Welcome to the new discover page.</HeaderItem>
            <HeaderItem>Here, let me load a few books for you...</HeaderItem>
            <HeaderItem>
              Here you go! Find more books with the search bar above.
            </HeaderItem>
          </HeaderBox>
        </>
      )}
      {list_type === "reading" && (
        <>
          <ReadingHeader>
            <span>
              Hey there! Welcome to your bookshelf reading list. Get started by
              heading over to{" "}
            </span>
            <HeaderLink onClick={handleReading}>the Discover page</HeaderLink>
            <span> to add books to your list.</span>
          </ReadingHeader>
        </>
      )}
      {list_type === "finished" && (
        <>
          <ReadingHeader>
            <span>
              Looks like you&apos;ve got some reading to do! Check them out in
              your{" "}
            </span>
            <HeaderLink onClick={handleReading}>reading list</HeaderLink>
            <span> or </span>
            <HeaderLink onClick={handleDiscover}>discover more.</HeaderLink>
          </ReadingHeader>
        </>
      )}
    </>
  )
}

export default Header

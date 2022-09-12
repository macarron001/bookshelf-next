import React, { Dispatch, SetStateAction } from "react"
import { HeaderLink, ReadingHeader } from "../../styled/bookshelf"

interface HeaderProp {
  setActive: Dispatch<SetStateAction<string>>
}

const Header = ({ setActive }: HeaderProp) => {
  const handleDiscover = () => {
    setActive("Discover")
  }

  const handleReading = () => {
    setActive("ReadingList")
  }
  return (
    <ReadingHeader>
      <span>
        Looks like you&apos;ve got some reading to do! Check them out in your{" "}
      </span>
      <HeaderLink onClick={handleReading}>reading list</HeaderLink>
      <span> or </span>
      <HeaderLink onClick={handleDiscover}>discover more.</HeaderLink>
    </ReadingHeader>
  )
}

export default Header

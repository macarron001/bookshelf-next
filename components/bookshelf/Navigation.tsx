import React from "react"
import { ActivePageEnum } from "api/enums"
import { NavBox, NavList, Link, NavContainer } from "../styled/bookshelf"
import { useBooks } from "context/BookContext"

const Navigation = () => {
  const { setIsBookSelected, active, setActive } = useBooks()
  const handleClick = (e: string | any) => {
    setActive(e.target.innerText)
    setIsBookSelected(false)
  }
  return (
    <NavContainer>
      <NavBox>
        <NavList>
          <Link
            active={active === ActivePageEnum.to_read ? "active" : ""}
            onClick={handleClick}
          >
            Reading List
          </Link>
          <Link
            active={active === ActivePageEnum.finished ? "active" : ""}
            onClick={handleClick}
          >
            Finished Books
          </Link>
          <Link
            active={active === ActivePageEnum.discover ? "active" : ""}
            onClick={handleClick}
          >
            Discover
          </Link>
        </NavList>
      </NavBox>
    </NavContainer>
  )
}

export default Navigation

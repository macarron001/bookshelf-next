import React, { Dispatch, SetStateAction } from "react"
import { ActivePageEnum } from "api/enums"
import { NavBox, NavList, Link } from "../styled/bookshelf"

interface NavigationProps {
  active: string
  setActive: Dispatch<SetStateAction<string>>
}

const Navigation = ({ active, setActive }: NavigationProps) => {
  const handleClick = (e: string | any) => {
    setActive(e.target.innerText)
  }
  return (
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
  )
}

export default Navigation

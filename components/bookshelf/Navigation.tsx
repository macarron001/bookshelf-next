import React, { useState } from "react"
import { NavBox, NavList, Link } from "../styled/bookshelf"

const Navigation = ({ active, setActive }) => {
  const handleClick = (e: string | any) => {
    setActive(e.target.innerText)
  }
  return (
    <NavBox>
      <NavList>
        <Link
          $active={active === "Reading List" ? "active" : ""}
          onClick={handleClick}
        >
          Reading List
        </Link>
        <Link
          $active={active === "Finished Books" ? "active" : ""}
          onClick={handleClick}
        >
          Finished Books
        </Link>
        <Link
          $active={active === "Discover" ? "active" : ""}
          onClick={handleClick}
        >
          Discover
        </Link>
      </NavList>
    </NavBox>
  )
}

export default Navigation

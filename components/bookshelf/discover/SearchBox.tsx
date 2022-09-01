import React from "react"

const SearchBox = () => {
  return (
    <form className="search-form">
      <input className="search-input" placeholder="Search books..." />
      <label className="serch-label">
        <button className="search-button">🔍</button>
      </label>
    </form>
  )
}

export default SearchBox

import { NoResultContainer } from "components/styled/bookshelf"
import React from "react"

const NoResult = () => {
  return (
    <NoResultContainer>
      <span>
        Ooops! 🙀 Either you&apos;ve made a typo with your search or we
        don&apos;t have that book yet.
      </span>
    </NoResultContainer>
  )
}

export default NoResult

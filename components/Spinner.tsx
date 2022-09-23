import React from "react"
import { SpinnerContainer, SpinnerBox, SpinnerIcon } from "./styled"

interface SpinnerProps {
  isLoading: boolean
}

const Spinner = ({ isLoading }: SpinnerProps) => {
  return (
    <SpinnerContainer isLoading={isLoading}>
      {isLoading && (
        <SpinnerBox>
          <SpinnerIcon viewBox="0 0 24 24" />
        </SpinnerBox>
      )}
    </SpinnerContainer>
  )
}

export default Spinner

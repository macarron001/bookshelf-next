import React from "react"
import "@reach/dialog/styles.css"
import { Dialog } from "@reach/dialog"

interface ButtonProps {
  text: string
  type?: string
  onClick: (params: any) => any
}

const Button = ({ onClick, text, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type === "submit" ? "submit" : "button"}
      className={text === "Login" ? "purple" : "white"}
    >
      {text}
    </button>
  )
}
export default Button

import React from "react"

interface ButtonProps {
  text: string
  onClick: (params: any) => any
}

const Button = ({ onClick, text }: ButtonProps) => {
  return (
    <button onClick={onClick} className={text === "Login" ? "purple" : "white"}>
      {text}
    </button>
  )
}
export default Button

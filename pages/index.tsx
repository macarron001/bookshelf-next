import Dialog from "@reach/dialog"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import Button from "../utils/Button"

const Home: NextPage = () => {
  const [openModal, setOpenModal] = useState("none")

  const handleLogin = () => {
    setOpenModal("login")
  }

  const handleRegister = () => {
    setOpenModal("register")
  }

  const handleClose = () => {
    setOpenModal("none")
  }

  return (
    <div className={"index-container"}>
      <Image src={"/books.png"} alt="books" width={80} height={80} />
      <h1>Bookshelf</h1>
      <div className="button-container">
        <Button onClick={handleLogin} text="Login" />
        <Button onClick={handleRegister} text="Register" />
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === "login"}>
        <div>
          <button onClick={handleClose}>Close</button>
          <h3>Login</h3>
        </div>
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === "register"}>
        <div>
          <button onClick={handleClose}>Close</button>
          <h3>Register</h3>
        </div>
      </Dialog>
    </div>
  )
}

export default Home

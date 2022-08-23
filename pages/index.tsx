import Dialog from "@reach/dialog"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import LoginForm from "../components/LoginForm"
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

  const login = (formData) => {
    console.log("login", formData)
  }

  const register = (formData) => {
    console.log("register", formData)
  }

  return (
    <div className={"index-container"}>
      <Image src={"/books.png"} alt="books" width={80} height={80} />
      <h1>Bookshelf</h1>
      <div className="button-container">
        <Button onClick={handleLogin} text="Login" />
        <Button onClick={handleRegister} text="Register" />
      </div>
      <Dialog
        aria-label="Login form"
        className="dialog"
        isOpen={openModal === "login"}
      >
        <div>
          <div className="close-button">
            <button className="circle" onClick={handleClose}>
              x
            </button>
          </div>
          <h3>Login</h3>
          <LoginForm onSubmit={login} buttonText="Login" />
        </div>
      </Dialog>
      <Dialog
        aria-label="Registration form"
        className="dialog"
        isOpen={openModal === "register"}
      >
        <div>
          <div className="close-button">
            <button className="circle" onClick={handleClose}>
              x
            </button>
          </div>
          <h3>Register</h3>
          <LoginForm onSubmit={register} buttonText="Register" />
        </div>
      </Dialog>
    </div>
  )
}

export default Home

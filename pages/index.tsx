import type { NextPage } from "next"
import Image from "next/image"
import { useState } from "react"
import Modal from "../components/index/Modal"
import {
  ButtonContainer,
  IndexContainer,
  Button,
  Title,
} from "../components/styled"
import { ToastContainer } from "react-toastify"

const Home: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<"Login" | "Register">()

  const handleLogin = () => {
    setIsModalOpen(true)
    setModalContent("Login")
  }

  const handleRegister = () => {
    setIsModalOpen(true)
    setModalContent("Register")
  }

  return (
    <>
      <IndexContainer>
        <Image src={"/books.png"} alt="books" width={80} height={80} />
        <Title>Bookshelf</Title>
        <ButtonContainer>
          <Button $purple={true} onClick={handleLogin}>
            Login
          </Button>
          <Button onClick={handleRegister}>Register</Button>
        </ButtonContainer>
        <ToastContainer />
      </IndexContainer>
      {isModalOpen && (
        <Modal modalContent={modalContent} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  )
}

export default Home

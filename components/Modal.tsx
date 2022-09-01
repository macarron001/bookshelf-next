import React from "react"
import {
  ModalContainer,
  ModalContent,
  CloseContainer,
  CircleButton,
  FormTitle,
} from "./styled"
import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"

interface ModalProps {
  modalContent: string | undefined
  setIsModalOpen: (params: boolean) => any
}
const Modal = ({ modalContent, setIsModalOpen }: ModalProps) => {
  const handleClose = () => {
    setIsModalOpen(false)
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseContainer>
          <CircleButton onClick={handleClose}>x</CircleButton>
        </CloseContainer>
        <FormTitle>{modalContent}</FormTitle>
        {modalContent === "Login" ? (
          <LoginForm />
        ) : (
          <RegisterForm handleClose={handleClose} />
        )}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal

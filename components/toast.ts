import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export interface ToastProps {
  type: string
  message: string
}

export const ToastMessage = ({ type, message }: ToastProps) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
    case "error":
      toast.error(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      })
  }
}

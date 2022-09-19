import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserProvider } from "../context/UserContext"
import { ToastContainer } from "react-toastify"
import { BookProvider } from "context/BookContext"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <BookProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </BookProvider>
    </UserProvider>
  )
}

export default MyApp

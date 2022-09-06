import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserProvider } from "../context/UserContext"
import { BooksProvider } from "../context/BooksContext"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <BooksProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </BooksProvider>
    </UserProvider>
  )
}

export default MyApp

import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserProvider } from "../context/UserContext"
import { useMemo, useState } from "react"
import { ToastContainer } from "react-toastify"
import { BooksContext } from "../context/BooksContext"

function MyApp({ Component, pageProps }: AppProps) {
  const [books, setBooks] = useState(null)
  const bookValue = useMemo(() => ({ books, setBooks }), [books, setBooks])

  return (
    <UserProvider>
      <BooksContext.Provider value={bookValue}>
        <Component {...pageProps} />
        <ToastContainer />
      </BooksContext.Provider>
    </UserProvider>
  )
}

export default MyApp

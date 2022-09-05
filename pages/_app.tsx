import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContext } from "../context/UserContext"
import { useMemo, useState } from "react"
import { ToastContainer } from "react-toastify"
import { BooksContext } from "../context/BooksContext"

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null)
  const [books, setBooks] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])
  const bookValue = useMemo(() => ({ books, setBooks }), [books, setBooks])

  return (
    <UserContext.Provider value={value}>
      <BooksContext.Provider value={bookValue}>
        <Component {...pageProps} />
        <ToastContainer />
      </BooksContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp

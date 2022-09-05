import { NextPage } from "next"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import { Container } from "../components/styled/bookshelf"
import { useState, useContext, useEffect, useMemo } from "react"
import Discover from "../components/bookshelf/discover/Discover"
import LogoutBox from "../components/bookshelf/LogoutBox"
import { UserContext } from "../context/UserContext"
import { useRouter } from "next/router"
import { getBooks } from "../api/books"
import { BooksContext } from "../context/BooksContext"

const Home: NextPage = () => {
  const [active, setActive] = useState("Reading List")
  const { user, setUser } = useContext(UserContext)
  const { books, setBooks } = useContext(BooksContext)
  const value = useMemo(() => ({ books, setBooks }), [books, setBooks])
  const router = useRouter()

  useEffect(() => {
    const existingUser = JSON.parse(localStorage.getItem("user"))
    existingUser ? setUser(existingUser) : router.push("/")

    const existingBooks = JSON.parse(localStorage.getItem("books"))
    existingBooks ? setBooks(existingBooks) : ""
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const fetchBooks = async () => {
      if (user && !books) {
        console.log("books fetched")
        const bookList = await getBooks(user)
        setBooks(bookList)
      }
    }

    fetchBooks().catch(console.error)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <LogoutBox />
      <Container>
        <Navigation active={active} setActive={setActive} />
        {active === "Discover" && <Discover />}
      </Container>
    </>
  )
}

export default Home

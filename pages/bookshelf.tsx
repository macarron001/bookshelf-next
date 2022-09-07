import { NextPage } from "next"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import { Container } from "../components/styled/bookshelf"
import { useState, useContext, useEffect } from "react"
import Discover from "../components/bookshelf/discover/Discover"
import LogoutBox from "../components/bookshelf/LogoutBox"
import { UserContext } from "../context/UserContext"
import { getBooks } from "../api/books"
import { BooksContext } from "../context/BooksContext"
import { ActivePageEnum } from "../api/enums"
import AuthorizedLayout from "../components/AuthorizedLayout"

const Home: NextPage = () => {
  const [active, setActive] = useState<ActivePageEnum | string>(
    ActivePageEnum.to_read
  )

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

  const contextUser = useContext(UserContext)
  const contextBooks = useContext(BooksContext)
  if (!contextUser) {
    return null
  }
  const { user } = contextUser

  if (!contextBooks) {
    return null
  }
  const { books, setBooks } = contextBooks

  return (
    <>
      <AuthorizedLayout>
        <LogoutBox />
        <Container>
          <Navigation active={active} setActive={setActive} />
          {active === ActivePageEnum.discover && <Discover />}
        </Container>
      </AuthorizedLayout>
    </>
  )
}

export default Home

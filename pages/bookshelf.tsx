import { NextPage } from "next"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import { Container, Main } from "../components/styled/bookshelf"
import Discover from "../components/bookshelf/discover/Discover"
import LogoutBox from "../components/bookshelf/LogoutBox"
import { ActivePageEnum } from "../api/enums"
import AuthorizedLayout from "../components/AuthorizedLayout"
import ReadingList from "../components/bookshelf/reading/ReadingList"
import FinishedList from "./../components/bookshelf/finished/FinishedList"
import { useBooks } from "context/BookContext"
import DetailedBook from "components/bookshelf/detailedbook/DetailedBook"

const Home: NextPage = () => {
  const { isBookSelected, selectedBook, active } = useBooks()

  return (
    <>
      <AuthorizedLayout>
        <LogoutBox />
        <Container>
          <Navigation />
          <Main>
            {isBookSelected ? (
              <DetailedBook book={selectedBook} />
            ) : (
              <>
                {active === ActivePageEnum.discover && <Discover />}
                {active === ActivePageEnum.to_read && <ReadingList />}
                {active === ActivePageEnum.finished && <FinishedList />}
              </>
            )}
          </Main>
        </Container>
      </AuthorizedLayout>
    </>
  )
}

export default Home

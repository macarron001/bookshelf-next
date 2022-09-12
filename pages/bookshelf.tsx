import { NextPage } from "next"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import { Container } from "../components/styled/bookshelf"
import { useState } from "react"
import Discover from "../components/bookshelf/discover/Discover"
import LogoutBox from "../components/bookshelf/LogoutBox"
import { ActivePageEnum } from "../api/enums"
import AuthorizedLayout from "../components/AuthorizedLayout"
import ReadingList from "../components/bookshelf/reading/ReadingList"
import FinishedList from "./../components/bookshelf/finished/FinishedList"

const Home: NextPage = () => {
  const [active, setActive] = useState<ActivePageEnum | string>(
    ActivePageEnum.to_read
  )

  return (
    <>
      <AuthorizedLayout>
        <LogoutBox />
        <Container>
          <Navigation active={active} setActive={setActive} />
          {active === ActivePageEnum.discover && <Discover />}
          {active === ActivePageEnum.to_read && (
            <ReadingList setActive={setActive} />
          )}
          {active === ActivePageEnum.finished && (
            <FinishedList setActive={setActive} />
          )}
        </Container>
      </AuthorizedLayout>
    </>
  )
}

export default Home

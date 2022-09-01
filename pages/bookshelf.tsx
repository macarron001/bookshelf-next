import { NextPage } from "next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import SearchBox from "../components/bookshelf/discover/SearchBox"
import { Button } from "../components/styled"
import {
  Container,
  HeaderBox,
  LogoutContainer,
  HeaderItem,
  Name,
} from "../components/styled/bookshelf"
import { useState } from "react"
import Discover from "../components/bookshelf/discover/Discover"

const Home: NextPage = () => {
  const [active, setActive] = useState("Reading List")
  return (
    <>
      <LogoutContainer>
        <Name>rpinoon</Name>
        <Button>Logout</Button>
      </LogoutContainer>
      <Container>
        <Navigation active={active} setActive={setActive} />
        {active === "Discover" && <Discover />}
      </Container>
      <ToastContainer />
    </>
  )
}

export default Home

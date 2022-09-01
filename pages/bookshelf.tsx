import { NextPage } from "next"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Navigation from "../components/bookshelf/Navigation"
import { Container } from "../components/styled/bookshelf"
import { useState, useContext } from "react"
import Discover from "../components/bookshelf/discover/Discover"
import LogoutBox from "../components/bookshelf/LogoutBox"

const Home: NextPage = () => {
  const [active, setActive] = useState("Reading List")

  return (
    <>
      <LogoutBox />
      <Container>
        <Navigation active={active} setActive={setActive} />
        {active === "Discover" && <Discover />}
      </Container>
      <ToastContainer />
    </>
  )
}

export default Home

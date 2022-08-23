import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Button from "../utils/Button"

const handleClick = () => {
  console.log("hello")
}

const Home: NextPage = () => {
  return (
    <div className={"index-container"}>
      <Image src={"/books.png"} alt="books" width={80} height={80} />
      <h1>Bookshelf</h1>
      <div className="button-container">
        <Button onClick={handleClick} text="Login" />
        <Button onClick={handleClick} text="Register" />
      </div>
    </div>
  )
}

export default Home

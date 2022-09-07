import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserProvider } from "../context/UserContext"
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </UserProvider>
  )
}

export default MyApp

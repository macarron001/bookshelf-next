import "../styles/globals.css"
import type { AppProps } from "next/app"
import { UserContext } from "../context/UserContext"
import { useMemo, useState } from "react"

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null)
  const value = useMemo(() => ({ user, setUser }), [user, setUser])

  return (
    <UserContext.Provider value={value}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp

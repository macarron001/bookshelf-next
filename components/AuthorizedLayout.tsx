import { useRouter } from "next/router"
import React, { ReactNode, useEffect, useContext } from "react"
import { UserContext } from "../context/UserContext"

const AuthorizedLayout = ({ children }: { children?: ReactNode }) => {
  const router = useRouter()
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") as string)

    if (!user) {
      router.push("/")
    } else {
      setUser(user)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

export default AuthorizedLayout

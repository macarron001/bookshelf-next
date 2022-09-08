import { useRouter } from "next/router"
import React, { ReactNode, useEffect, useContext } from "react"
import { useSession } from "hooks/useSession"

const AuthorizedLayout = ({ children }: { children?: ReactNode }) => {
  const router = useRouter()
  const { setUser } = useSession()

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

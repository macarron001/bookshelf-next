import { useRouter } from "next/router"
import React, { ReactNode, useEffect } from "react"
import { useSession } from "hooks/useSession"
import { whoami } from "api/session/whoami"

const AuthorizedLayout = ({ children }: { children?: ReactNode }) => {
  const router = useRouter()
  const { user, setUser } = useSession()

  useEffect(() => {
    const fetchUser = async () => {
      const user = await whoami()

      if (!user) {
        router.push("/")
      } else {
        setUser(user)
      }
    }

    fetchUser()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (user) {
    return <>{children}</>
  }
}

export default AuthorizedLayout

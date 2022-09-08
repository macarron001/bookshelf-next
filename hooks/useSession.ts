import { useContext } from "react"

import { UserContext } from "context/UserContext"

export const useSession = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error(`useSession must be used within an SessionContext`)
  }

  const { user, setUser } = context

  return { user, setUser }
}

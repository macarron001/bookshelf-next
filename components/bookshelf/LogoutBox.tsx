import React from "react"
import { LogoutButton, LogoutContainer } from "../styled/bookshelf"
import { useRouter } from "next/router"
import { logout } from "api/session/logout"
import { useSession } from "hooks/useSession"

const LogoutBox = () => {
  const { user, setUser } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    const response = await logout()
    if (response === 200) {
      setUser(null)
      router.push("/")
    }
  }

  return (
    <LogoutContainer>
      {user && <p>{user.username}</p>}
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </LogoutContainer>
  )
}

export default LogoutBox

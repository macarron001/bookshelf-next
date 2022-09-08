import React from "react"
import { LogoutContainer } from "../styled/bookshelf"
import { useRouter } from "next/router"
import { Button } from "../styled"
import { logout } from "api/logout"
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
    <>
      <LogoutContainer>
        {user && <p>{user.username}</p>}
        <Button onClick={handleLogout}>Logout</Button>
      </LogoutContainer>
    </>
  )
}

export default LogoutBox

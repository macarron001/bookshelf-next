import React, { useState, useContext } from "react"
import { UserContext } from "../../context/UserContext"
import { LogoutContainer } from "../styled/bookshelf"
import { useRouter } from "next/router"
import { Button } from "../styled"
import { logout } from "../../api/logout"

const LogoutBox = () => {
  const { user, setUser } = useContext(UserContext)
  const router = useRouter()

  const handleLogout = async () => {
    const response = await logout(user)
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

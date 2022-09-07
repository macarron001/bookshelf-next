import React, {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
} from "react"

type User = {
  id: number
  username: string
}

type UserContextType = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = ({ children }: { children?: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  const value = {
    user: user,
    setUser: setUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

import { useState, useEffect, useContext, createContext } from "react"

export const SessionContext = createContext()
export const useAuth = typeof window === "undefined" ? () => ({}) : () => useContext(SessionContext)

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetch("/api/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    setLoading(false)
    if (response.ok) {
      const _user = (await response.json()).user
      console.log({ _user })
      setUser(_user && !(typeof _user == "string" && _user == "") ? _user : null)
    }
  }, [])

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated: user !== null,
        user,
        loading,
        login: (email) => {
          window.location.href = `/api/auth/login`
        },
        logout: () => {
          window.location.href = `/api/auth/logout`
        },
      }}
    >
      {children}
    </SessionContext.Provider>
  )
}

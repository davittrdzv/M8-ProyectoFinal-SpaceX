import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    return storedAuth ? JSON.parse(storedAuth) : false
  })
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [userPayload, setUserPayload] = useState(null)

  const signInFunction = (token) => {
    localStorage.setItem('token', token)
    localStorage.setItem('isAuthenticated', true)
    setToken(token)
    const payload = jwtDecode(token)
    setUserPayload(payload)
    setIsAuthenticated(true)
  }

  const logOutFunction = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUserPayload(null)
    setIsAuthenticated(false)
    localStorage.setItem('isAuthenticated', false)
  }

  useEffect(() => {
    console.log(isAuthenticated)
    console.log(typeof isAuthenticated)
  }, [isAuthenticated, userPayload])

  const data = {
    signInFunction,
    logOutFunction,
    isAuthenticated,
    token
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

import { createContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { getMeUserService } from '@/services/userServices'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated')
    return storedAuth ? JSON.parse(storedAuth) : false
  })
  const [token, setToken] = useState(localStorage.getItem('token') || null)
  const [userPayload, setUserPayload] = useState(null)
  const [userProfile, setUserProfile] = useState({})
  const [isUserProfileLoaded, setIsUserProfileLoaded] = useState(false)
  const [userName, setUserName] = useState(() => {
    const storedUserName = localStorage.getItem('userName')
    return storedUserName ? JSON.parse(storedUserName) : {}
  })

  const fetchUserInfo = async (token) => {
    try {
      const { status, data } = await getMeUserService(token)
      if (status === 200) {
        const nameData = { firstName: data.first_name, lastName: data.last_name }
        setUserName(nameData)
        localStorage.setItem('userName', JSON.stringify(nameData))
        setUserProfile(data)
        setIsUserProfileLoaded(true)
      }
    } catch (error) {
      console.error('Error fetching user data during login:', error)
      throw error
    }
  }

  const signInFunction = async (token) => {
    await fetchUserInfo(token)
    localStorage.setItem('token', token)
    localStorage.setItem('isAuthenticated', true)
    setToken(token)
    const payload = jwtDecode(token)
    setUserPayload(payload)
    setIsAuthenticated(true)
  }

  const logOutFunction = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userName')
    setUserName({})
    setUserProfile({})
    setToken(null)
    setUserPayload(null)
    setIsAuthenticated(false)
    setIsUserProfileLoaded(false)
    localStorage.setItem('isAuthenticated', false)
  }

  useEffect(() => {
    if (token) {
      const payload = jwtDecode(token)
      setUserPayload(payload)
      fetchUserInfo(token)
    }
  }, [token])

  const data = {
    fetchUserInfo,
    signInFunction,
    logOutFunction,
    isAuthenticated,
    token,
    userName,
    userProfile,
    isUserProfileLoaded,
    userPayload
  }

  return (
    <AuthContext.Provider value={data}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

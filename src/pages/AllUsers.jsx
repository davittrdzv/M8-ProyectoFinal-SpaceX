import { useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getAllUsersService } from '@/services/userServices'
import Spinner from '@/components/Spinner'
import UserProfileCard from '@/components/UserProfileCard'

const AllUsers = () => {
  const { token } = useAuthContext()
  const [users, setUsers] = useState([])
  const [areUsersProfilesLoaded, setAreUsersProfilesLoaded] = useState(false)

  const fetchUsersInfo = async (token) => {
    try {
      const { status, data } = await getAllUsersService(token)
      if (status === 200) {
        setUsers(data)
        setAreUsersProfilesLoaded(true)
      }
    } catch (error) {
      console.error('Error fetching user data during login:', error)
      throw error
    }
  }

  useEffect(() => {
    if (token) {
      fetchUsersInfo(token)
    }
  }, [token])

  return (
    <div className='container mt-custom'>
      <div className='card mt-2 mb-3 card-dark text-center'>
        <h1>Welcome Admin!</h1>
      </div>
      <p className='text-center'>This admin page provides a comprehensive overview of all registered users. As an administrator, you can view essential information such as names, email addresses, roles, and registration dates.</p>
      {areUsersProfilesLoaded
        ? (
            users.map(user => (
              <UserProfileCard
                key={user.id}
                firstName={user.first_name}
                lastName={user.last_name}
                email={user.email}
                gender={user.gender}
                role={user.role}
                createdAt={user.createdAt}
                updatedAt={user.updatedAt}
              />
            ))
          )
        : <Spinner />}
    </div>

  )
}

export default AllUsers

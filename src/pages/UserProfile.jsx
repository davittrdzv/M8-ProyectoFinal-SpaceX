import { useAuthContext } from '@/hooks/useAuthContext'
import Spinner from '@/components/Spinner'
import UserProfileCard from '@/components/UserProfileCard'

const UserProfile = () => {
  const { userProfile, isUserProfileLoaded } = useAuthContext()

  return (
    <div className='container mt-custom'>
      {isUserProfileLoaded
        ? (
          <>
            <div className='card mt-2 mb-3 card-dark'>
              <h1 className='text-center'>{`Welcome to your Profile Information, ${userProfile.first_name} ${userProfile.last_name}!`}</h1>
            </div>
            <UserProfileCard
              firstName={userProfile.first_name}
              lastName={userProfile.last_name}
              email={userProfile.email}
              gender={userProfile.gender}
              role={userProfile.role}
              createdAt={userProfile.createdAt}
              updatedAt={userProfile.updatedAt}
            />
          </>
          )
        : <Spinner />}
    </div>

  )
}

export default UserProfile

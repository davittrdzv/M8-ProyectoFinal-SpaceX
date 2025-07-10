import { useAuthContext } from '@/hooks/useAuthContext'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'
import Spinner from '@/components/Spinner'

const UserProfile = () => {
  const { userProfile, isUserProfileLoaded } = useAuthContext()
  console.log(userProfile.createdAt)
  console.log(standardizeDateFormat(1674323738966))

  return (
    <div className='container mt-custom'>
      {isUserProfileLoaded
        ? (
          <>
            <div className='card mt-2 mb-3 card-dark'>
              <h1 className='text-center'>{`Welcome to your Profile Information, ${userProfile.first_name} ${userProfile.last_name}!`}</h1>
            </div>
            <div className='mx-auto mt-4 user-table-container'>
              <table className='table table-bordered table-striped mb-5'>
                <tbody>
                  <tr>
                    <td>First Name</td>
                    <td>{userProfile.first_name}</td>
                  </tr>
                  <tr>
                    <td>Last Name</td>
                    <td>{userProfile.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{userProfile.email}</td>
                  </tr>
                  <tr>
                    <td>Gender</td>
                    <td>{userProfile.gender === 'M' ? 'Male' : userProfile.gender === 'F' ? 'Female' : ''}</td>
                  </tr>
                  <tr>
                    <td>Role</td>
                    <td>{userProfile.role}</td>
                  </tr>
                  <tr>
                    <td>Created At</td>
                    <td>{standardizeDateFormat(userProfile.createdAt)}</td>
                  </tr>
                  <tr>
                    <td>Updated At</td>
                    <td>{standardizeDateFormat(userProfile.updatedAt)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
          )
        : <Spinner />}
    </div>

  )
}

export default UserProfile

import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'

const UserProfileCard = ({ firstName, lastName, email, gender, role, createdAt, updatedAt }) => {
  return (
    <div className='mx-auto mt-4 user-table-container'>
      <table className='table table-bordered table-striped mb-4'>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{lastName}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{gender === 'M' ? 'Male' : gender === 'F' ? 'Female' : ''}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{role}</td>
          </tr>
          <tr>
            <td>Created At</td>
            <td>{standardizeDateFormat(createdAt)}</td>
          </tr>
          <tr>
            <td>Updated At</td>
            <td>{standardizeDateFormat(updatedAt)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UserProfileCard

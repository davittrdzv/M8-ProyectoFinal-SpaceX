import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'
import { Link } from 'react-router-dom'

const LaunchSummary = ({ id, name, date, success, rocket, launchpad, picture }) => {
  return (
    <div className='col-md-6 text-center' style={{ width: '20rem' }}>
      <Link to={`/launches/${id}`} className='text-decoration-none text-white'>
        <h3>{name}</h3>
        <img src={picture || placeholderPic} className='card-img-top' alt={name} onError={handlePicError} />
      </Link>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <strong>Date:</strong>
          <p className='compact-text'>{standardizeDateFormat(date)}</p>
        </li>
        <li className='list-group-item'>
          <strong>Rocket:</strong>
          <p className='compact-text'>{rocket}</p>
        </li>
        <li className='list-group-item'>
          <strong>Location:</strong>
          <p className='compact-text'>{launchpad}</p>
        </li>
        <li className='list-group-item'>
          <strong>Status:</strong>
          <p className='compact-text'>{success}</p>
        </li>
      </ul>
    </div>
  )
}

export default LaunchSummary

import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'
import { Link } from 'react-router-dom'

const LaunchSummary = ({ id, name, date, success, rocket, launchpad, picture }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={picture || placeholderPic} className='card-img-top' alt={name} onError={handlePicError} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          Date: {date}
        </p>
        <p className='card-text'>
          Rocket: {rocket}
        </p>
        <p className='card-text'>
          Location: {launchpad}
        </p>
        <p className='card-text'>
          Status: {success}
        </p>
        <Link to={`/launches/${id}`} className='btn btn-primary'>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default LaunchSummary

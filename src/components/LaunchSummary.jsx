import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'
import { Link } from 'react-router-dom'

const LaunchSummary = ({ id, name, date, success, rocket, launchpad, picture }) => {
  return (
    <div className='col-md-6 text-center' style={{ width: '20rem' }}>
      <Link to={`/launches/${id}`} className='text-decoration-none text-white'>
        <div
          className='border-custom mb-2 d-flex align-items-center justify-content-center text-center'
          style={{
            height: '4.5rem',
            padding: '0 0.5rem',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            wordBreak: 'break-word',
          }}
          title={name}
        >
          <h3 style={{ margin: 0, fontWeight: 'bold' }}>{name}</h3>
        </div>
        <div
          style={{
            width: '100%',
            height: '200px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <img
            src={picture || placeholderPic}
            alt={name}
            onError={handlePicError}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>
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

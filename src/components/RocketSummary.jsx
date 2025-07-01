import { Link } from 'react-router-dom'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'

const RocketSummary = ({ id, name, company, country, firstFlight, picture }) => {
  return (
    <div className='col-md-10 text-center' style={{ width: '50rem' }}>
      <Link to={`/rockets/${id}`} className='text-decoration-none text-white'>
        <h3 className='border-custom'>{name}</h3>
        <img src={picture} className='card-img-top' alt={name} />
      </Link>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <strong>Company:</strong>
          <p className='compact-text'>{company}</p>
        </li>
        <li className='list-group-item'>
          <strong>Country:</strong>
          <p className='compact-text'>{country}</p>
        </li>
        <li className='list-group-item'>
          <strong>First Flight:</strong>
          <p className='compact-text'>{standardizeDateFormat(firstFlight)}</p>
        </li>
      </ul>
    </div>

  )
}

export default RocketSummary

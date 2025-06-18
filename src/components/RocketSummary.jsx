import { Link } from 'react-router-dom'

const RocketSummary = ({ id, name, company, country, firstFlight, picture }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={picture} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>
          Company: {company}
        </p>
        <p className='card-text'>
          Country: {country}
        </p>
        <p className='card-text'>
          First Flight: {firstFlight}
        </p>
        <Link to={`/rockets/${id}`} className='btn btn-primary'>
          View Details
        </Link>
      </div>
    </div>
  )
}

export default RocketSummary

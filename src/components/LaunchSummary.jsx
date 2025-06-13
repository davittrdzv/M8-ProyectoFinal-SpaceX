const LaunchSummary = ({ name, date, success, rocket, launchpad, picture }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <img src={picture} className='card-img-top' alt={name} />
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
        <a href='/about' className='btn btn-primary'>
          View Details
        </a>
      </div>
    </div>
  )
}

export default LaunchSummary

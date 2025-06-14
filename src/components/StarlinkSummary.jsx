const StarlinkSummary = ({ name, version, launchDate, decayed, decayedDate }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        {version &&
          <p className='card-text'>
            Version: {version}
          </p>}
        {launchDate &&
          <p className='card-text'>
            Launch Date: {launchDate}
          </p>}
        {decayed === 1
          ? (
            <>
              <p className='card-text'>
                Decayed/Deorbited on {decayedDate}
              </p>
            </>
            )
          : <></>}
        <a href='/about' className='btn btn-primary'>
          View Details
        </a>
      </div>
    </div>
  )
}

export default StarlinkSummary

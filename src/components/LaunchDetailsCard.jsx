import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'

const LaunchDetailsCard = ({ launch }) => {
  return (
    <div className='card mb-4'>
      <img
        src={launch.links?.patch?.large || placeholderPic}
        alt={launch.name}
        className='card-img-top'
        onError={handlePicError}
      />
      <div className='card-body'>
        <h2 className='card-title'>{launch.name}</h2>
        <p className='card-text'><strong>Flight Number:</strong> {launch.flight_number}</p>
        <p className='card-text'><strong>Date (UTC):</strong> {launch.date_utc}</p>
        <p className='card-text'>
          <strong>Success:</strong>{' '}
          {launch.success ? 'Successful' : 'Unsuccessful'}
        </p>
        {!launch.success && launch.failures?.length > 0 && (
          <>
            <h5>Failures</h5>
            <ul>
              {launch.failures.map((fail, index) => (
                <li key={index}>
                  <p><strong>Time:</strong> {fail.time}s</p>
                  {fail.altitude && <p><strong>Altitude:</strong> {fail.altitude}m</p>}
                  <p><strong>Reason:</strong> {fail.reason}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        {launch.details && <p className='card-text'><strong>Details:</strong> {launch.details}</p>}
        <p className='card-text'><strong>Rocket:</strong> {launch.rocket} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</p>
        {launch.crew?.length > 0 && (
          <>
            <h5>Crew</h5>
            <ul>
              {launch.crew.map((crewMember, index) => (
                <li key={index}>
                  <span>{crewMember.crew} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</span>
                  <p>Role: {crewMember.role}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        {launch.ships?.length > 0 && (
          <>
            <h5>Ships</h5>
            <ul>
              {launch.ships.map((ship, index) => (
                <li key={index}>{ship} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</li>
              ))}
            </ul>
          </>
        )}
        {launch.capsules?.length > 0 && (
          <>
            <h5>Capsules</h5>
            <ul>
              {launch.capsules.map((capsule, index) => (
                <li key={index}>{capsule} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</li>
              ))}
            </ul>
          </>
        )}
        {launch.payloads?.length > 0 && (
          <>
            <h5>Payloads</h5>
            <ul>
              {launch.payloads.map((payload, index) => (
                <li key={index}>{payload} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</li>
              ))}
            </ul>
          </>
        )}
        {launch.launchpad && (
          <p className='card-text'>
            <strong>Launchpad:</strong> {launch.launchpad} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT
          </p>
        )}
        {launch.cores?.length > 0 && (
          launch.cores?.some(core => core.core !== null)
            ? (
              <>
                <h5>Cores</h5>
                {launch.cores.map((core, index) => (
                  <div key={index}>
                    <p><strong>Core:</strong> {core.core} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</p>
                    <p><strong>Flight:</strong> {core.flight}</p>
                    {core.landing_attempt && (
                      <>
                        <p><strong>Landing Attempt:</strong> Yes</p>
                        <p><strong>Landing Success:</strong> {core.landing_success ? 'Successful' : 'Unsuccessful'}</p>
                        {core.landing_type && <p><strong>Landing Type:</strong> {core.landing_type}</p>}
                        {core.landpad && <p><strong>Landpad:</strong> {core.landpad} — NOTA: REFERENCIA CRUZADA CON OTRO ENDPOINT</p>}
                      </>
                    )}
                  </div>
                ))}
              </>)
            : <></>
        )}
        {launch.links?.flickr?.original?.length > 0 && (
          <>
            <img
              src={launch.links.flickr.original[0]}
              className='img-fluid mb-3'
              alt='Launch Flickr'
            />
            <span>NOTA: METER CARRUSEL</span>
          </>
        )}
        {launch.links?.webcast && (
          <>
            <h5>Launch Video</h5>
            <span>NOTA: METER VIDEO</span>
          </>
        )}
        {launch.links?.article && (
          <p><a href={launch.links.article} target='_blank' rel='noopener noreferrer'>Read Article</a></p>
        )}
        {launch.links?.wikipedia && (
          <p>Wikipedia: <a href={launch.links.wikipedia} target='_blank' rel='noopener noreferrer'>{launch.links.wikipedia}</a></p>
        )}
      </div>
    </div>
  )
}

export default LaunchDetailsCard

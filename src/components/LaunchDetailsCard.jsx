import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'
import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { findById } from '@/utilities/findById'
import { Link } from 'react-router-dom'

const LaunchDetailsCard = ({ launch }) => {
  const {
    rocketsInfo,
    launchpadsInfo,
    crewInfo,
    shipsInfo,
    capsulesInfo,
    payloadsInfo,
    coresInfo,
    landpadsInfo,
  } = useSpaceXContext()
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
        <strong>Rocket:</strong> {' '}
        <Link to={`/rockets/${launch.rocket}`} className='card-text'>{findById(rocketsInfo, launch.rocket)?.name}</Link>
        {launch.crew?.length > 0 && (
          <>
            <h5>Crew</h5>
            {launch.crew.map((crewMember, index) => {
              const crewData = findById(crewInfo, crewMember.crew)
              return (
                <div className='card' key={index}>
                  {crewData &&
                    <>
                      <img src={crewData.image} alt={crewData.name} />
                      <p>{crewData.name}</p>
                      <p>Agency: {crewData.agency}</p>
                      <p>Role: {crewMember.role}</p>
                    </>}
                </div>
              )
            })}
          </>
        )}
        {launch.ships?.length > 0 && (
          <>
            <h5>Ships</h5>
            <ul>
              {launch.ships.map((ship, index) => (
                <li key={index}>{findById(shipsInfo, ship)?.legacy_id}.</li>
              ))}
            </ul>
          </>
        )}
        {launch.capsules?.length > 0 && (
          <>
            <h5>Capsules</h5>
            <ul>
              {launch.capsules.map((capsule, index) => (
                <li key={index}>
                  {findById(capsulesInfo, capsule)?.serial} {'('}{findById(capsulesInfo, capsule)?.type}{').'}
                </li>
              ))}
            </ul>
          </>
        )}
        {launch.payloads?.length > 0 && (
          <>
            <h5>Payloads</h5>
            <ul>
              {launch.payloads.map((payload, index) => (
                <li key={index}>
                  {findById(payloadsInfo, payload)?.name}
                  <p>{findById(payloadsInfo, payload)?.type}</p>
                </li>
              ))}
            </ul>
          </>
        )}
        {launch.launchpad && (
          <p className='card-text'>
            <strong>Launchpad:</strong> {findById(launchpadsInfo, launch.launchpad)?.full_name}{'.'}
          </p>
        )}
        {launch.cores?.length > 0 && (
          launch.cores?.some(core => core.core !== null)
            ? (
              <>
                <h5>Cores</h5>
                {launch.cores.map((core, index) => (
                  <div key={index}>
                    <p><strong>Core:</strong> {findById(coresInfo, core.core)?.serial}{'.'}</p>
                    <p><strong>Flight:</strong> {core.flight}</p>
                    {core.landing_attempt && (
                      <>
                        <p><strong>Landing Attempt:</strong> Yes</p>
                        <p><strong>Landing Success:</strong> {core.landing_success ? 'Successful' : 'Unsuccessful'}</p>
                        {core.landing_type && <p><strong>Landing Type:</strong> {core.landing_type}</p>}
                        {core.landpad && (() => {
                          const landpadData = findById(landpadsInfo, core.landpad)
                          return landpadData && (
                            <div className='mb-2'>
                              <p><strong>Landpad:</strong> {landpadData.name} ({landpadData.full_name})</p>
                              <p><strong>Locality:</strong> {landpadData.locality}</p>
                              <p><strong>Region:</strong> {landpadData.region}</p>
                            </div>
                          )
                        })()}
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
          </>
        )}
        {launch.links?.webcast && (
          <>
            <h5>Launch Video</h5>
            <div className='ratio ratio-16x9'>
              <iframe
                src={getYouTubeEmbedUrl(launch.links.webcast)}
                title='Launch video'
                allowFullScreen
              />
            </div>
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

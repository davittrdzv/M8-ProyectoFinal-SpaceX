import Carousel from '@/components/Carousel'
import { placeholderPic, handlePicError } from '@/utilities/placeholderPic'
import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'
import { formatSuccess } from '@/utilities/formatSuccess'
import { findById } from '@/utilities/findById'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { useAuthContext } from '@/hooks/useAuthContext'
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

  const { isAuthenticated } = useAuthContext()

  const images = [
    ...(launch.links?.patch?.large ? [launch.links.patch.large] : []),
    ...(launch.links?.flickr?.original || [])
  ]

  return (
    <>
      <h1>{launch.name}</h1>
      {
        images.length > 0
          ? (
              images.length > 1
                ? <Carousel images={images} />
                : <img
                    src={images[0]}
                    alt={launch.name}
                    className='launch-pics'
                    onError={handlePicError}
                  />
            )
          : (
            <img
              src={placeholderPic}
              alt={launch.name}
              className='launch-pics'
              onError={handlePicError}
            />
            )
      }
      {launch.details && <h3>{launch.details}</h3>}
      <div className='row justify-content-center align-items-stretch gx-4 gy-4 mt-2'>
        <div className='col-12 col-md-3 text-center d-flex flex-column h-100'>
          <h3 className='border-custom'>{launch.name}</h3>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <strong>Flight Number:</strong>
              <p className='compact-text'>{launch.flight_number}</p>
            </li>
            <li className='list-group-item'>
              <strong>Date:</strong>
              <p className='compact-text'>{standardizeDateFormat(launch.date_utc)}</p>
            </li>
            <li className='list-group-item'>
              <strong>Success:</strong>
              <p className='compact-text'>{formatSuccess(launch.success)}</p>
            </li>
            <li className='list-group-item'>
              <strong>Rocket:</strong>
              <p className='compact-text'>
                <Link to={`/rockets/${launch.rocket}`} className='btn btn-custom'>{findById(rocketsInfo, launch.rocket)?.name}</Link>
              </p>
            </li>
          </ul>
        </div>
        {!launch.success && launch.failures?.length > 0 && (
          launch.failures.map((fail, index) => (
            <div className='col-12 col-md-3 text-center d-flex flex-column' key={index}>
              <h3 className='border-custom'>Failures</h3>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <strong>Time:</strong>
                  <p className='compact-text'>{fail.time} s</p>
                </li>
                {fail.altitude &&
                  <li className='list-group-item'>
                    <strong>Altitude:</strong>
                    <p className='compact-text'>{fail.altitude} m</p>
                  </li>}
                <li className='list-group-item'>
                  <strong>Reason:</strong>
                  <p className='compact-text'>{fail.reason}</p>
                </li>
              </ul>
            </div>
          ))
        )}
        {launch.payloads?.length > 0 && (
          <>
            <div className='col-12 col-md-3 text-center d-flex flex-column'>
              <h3 className='border-custom'>Payloads</h3>
              <ul className='list-group list-group-flush'>
                {launch.payloads.map((payload, index) => (
                  <li key={index} className='list-group-item'>
                    <strong>Name:</strong>
                    <p className='compact-text'>{findById(payloadsInfo, payload)?.name}</p>
                    <strong>Type:</strong>
                    <p className='compact-text'>{findById(payloadsInfo, payload)?.type}</p>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {launch.ships?.length > 0 && (
          <div className='col-12 col-md-3 text-center d-flex flex-column'>
            <h3 className='border-custom'>Ships</h3>
            <ul className='list-group list-group-flush'>
              {launch.ships.map((ship, index) => (
                <li className='list-group-item' key={index}>
                  <strong>Name:</strong>
                  <p className='compact-text'>{findById(shipsInfo, ship)?.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {launch.capsules?.length > 0 && (
          <div className='col-12 col-md-3 text-center d-flex flex-column'>
            <h3 className='border-custom'>Capsules</h3>
            <ul className='list-group list-group-flush'>
              {launch.capsules.map((capsule, index) => (
                <li key={index} className='list-group-item'>
                  <strong>Serial:</strong>
                  <p className='compact-text'>{findById(capsulesInfo, capsule)?.serial}</p>
                  <strong>Type:</strong>
                  <p className='compact-text'>{findById(capsulesInfo, capsule)?.type}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {launch.launchpad && (
          <div className='col-12 col-md-3 text-center d-flex flex-column'>
            <h3 className='border-custom'>Launchpad</h3>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <strong>Name:</strong>
                <p className='compact-text'>{findById(launchpadsInfo, launch.launchpad)?.full_name}</p>
              </li>
            </ul>
          </div>
        )}
        {launch.cores?.length > 0 && (
          launch.cores?.some(core => core.core !== null)
            ? (
              <>
                {launch.cores.map((core, index) => (
                  <div key={index} className='col-12 col-md-3 text-center d-flex flex-column'>
                    <h3 className='border-custom'>Core {findById(coresInfo, core.core)?.serial}</h3>
                    <ul className='list-group list-group-flush'>
                      <li className='list-group-item'>
                        <strong>Flight:</strong>
                        <p className='compact-text'>{core.flight}</p>
                      </li>
                      {core.landing_attempt && (
                        <>
                          <li className='list-group-item'>
                            <strong>Landing Attempt:</strong>
                            <p className='compact-text'>Yes</p>
                          </li>
                          <li className='list-group-item'>
                            <strong>Landing Success:</strong>
                            <p className='compact-text'>{core.landing_success ? 'Successful' : 'Unsuccessful'}</p>
                          </li>
                          {core.landing_type &&
                            <li className='list-group-item'>
                              <strong>Landing Type:</strong>
                              <p className='compact-text'>{core.landing_type}</p>
                            </li>}
                          {core.landpad && (() => {
                            const landpadData = findById(landpadsInfo, core.landpad)
                            return landpadData && (
                              <>
                                <li className='list-group-item'>
                                  <strong>Landpad:</strong>
                                  <p className='compact-text'>{landpadData.name} ({landpadData.full_name})</p>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Locality:</strong>
                                  <p className='compact-text'>{landpadData.locality}</p>
                                </li>
                                <li className='list-group-item'>
                                  <strong>Region:</strong>
                                  <p className='compact-text'>{landpadData.region}</p>
                                </li>
                              </>
                            )
                          })()}
                        </>
                      )}
                    </ul>
                  </div>
                ))}
              </>)
            : <></>
        )}
        {(launch.links?.article || launch.links?.wikipedia) && (
          <div className='col-12 col-md-3 text-center d-flex flex-column'>
            <h3 className='border-custom'>External Links</h3>
            <ul className='list-group list-group-flush'>
              {launch.links?.article && (
                <li className='list-group-item'>
                  {isAuthenticated
                    ? (
                      <a href={launch.links.article} target='_blank' rel='noopener noreferrer' className='btn btn-custom'>
                        Read Article
                      </a>
                      )
                    : (
                      <p className='compact-text'>The external article is available exclusively for registered users.{' '}
                        <Link to='/signin' className='text-black'>Sign in</Link> or <Link to='/signup' className='text-black'>create an account</Link> for access.
                      </p>
                      )}
                </li>
              )}
              {launch.links?.wikipedia && (
                <li className='list-group-item'>
                  <a href={launch.links.wikipedia} target='_blank' rel='noopener noreferrer' className='btn btn-custom'>
                    Wikipedia
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
      {launch.crew?.length > 0 && (
        <>
          <div className='row justify-content-center align-items-stretch gx-4 gy-4 mt-2'>
            <h3 className='border-custom'>Crew</h3>
            {launch.crew.map((crewMember, index) => {
              const crewData = findById(crewInfo, crewMember.crew)
              return (
                <div className='col-12 col-md-3 text-center d-flex flex-column' key={index}>
                  {crewData &&
                    <>
                      <h3 className='border-custom'>{crewData.name}</h3>
                      <div>

                        <ul className='list-group list-group-flush'>
                          <li className='list-group-item'>
                            <img src={crewData.image} alt={crewData.name} style={{ width: '100%' }} />
                          </li>
                          <li className='list-group-item'>
                            <strong>Agency:</strong>
                            <p className='compact-text'>{crewData.agency}</p>
                          </li>
                          <li className='list-group-item'>
                            <strong>Role:</strong>
                            <p className='compact-text'>{crewMember.role}</p>
                          </li>
                        </ul>
                      </div>
                    </>}
                </div>
              )
            })}
          </div>
        </>
      )}
      {launch.links?.webcast &&
        (
          <>
            <div className='mt-2'>
              <h3 className='border-custom'>Launch Video</h3>
            </div>
            {isAuthenticated
              ? (
                <div className='col-md-8 text-center mt-4 mx-auto'>
                  <div className='ratio ratio-16x9 my-4'>
                    <iframe
                      src={getYouTubeEmbedUrl(launch.links.webcast)}
                      title='Launch video'
                      allowFullScreen
                    />
                  </div>
                </div>)
              : (
                <div className='text-center mt-2'>
                  <h3>Want to watch the launch video?{' '} <Link to='/signin' className='text-white'>Sign in</Link> or <Link to='/signup' className='text-white'>create an account!</Link></h3>
                </div>
                )}
          </>
        )}
    </>
  )
}

export default LaunchDetailsCard

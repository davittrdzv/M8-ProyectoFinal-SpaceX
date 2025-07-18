import { lazy } from 'react'
import { Link } from 'react-router-dom'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import LazyWithSpinner from '@/utilities/LazyWithSpinner'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'
import Carousel from '@/components/Carousel'
import Spinner from '@/components/Spinner'
import SpaceXLogo from '@/components/SpaceXLogo'
const SolarSystemScene = lazy(() => import('@/components/SolarSystemScene'))
const Video = lazy(() => import('@/components/Video'))

const Roadster = () => {
  const { roadsterInfo, isRoadsterInfoLoading } = useSpaceXContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        <h1>Elon Musk's Tesla Roadster</h1>
        <p>In 2018, SpaceX launched Elon Musk’s personal Tesla Roadster into space aboard the Falcon Heavy’s maiden flight. It was an iconic and unconventional payload designed to showcase the rocket’s capabilities.</p>
        <p>This section displays real-time data and details about the Roadster’s current journey through space.</p>
      </div>
      {isRoadsterInfoLoading
        ? <Spinner />
        : (
          <>
            <div className='container-fluid text-center'>
              {roadsterInfo.flickr_images?.length > 0 && (
                <div className='mb-4'>
                  <Carousel images={roadsterInfo.flickr_images} />
                </div>
              )}
              <p>{roadsterInfo.details}</p>
            </div>
            <div className='row mt-2'>
              <div className='col-md-3 text-center mt-2 mx-auto'>
                <h3 className='border-custom'>Launch & Current Status</h3>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <strong>Launch Date:</strong>
                    <p className='compact-text'>{standardizeDateFormat(roadsterInfo.launch_date_utc)}</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Launch Mass:</strong>
                    <p className='compact-text'>{roadsterInfo.launch_mass_kg} kg</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Speed:</strong>
                    <p className='compact-text'>{roadsterInfo.speed_kph.toLocaleString()} km/h</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Distance from Earth:</strong>
                    <p className='compact-text'>{roadsterInfo.earth_distance_km.toLocaleString()} km</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Distance from Mars:</strong>
                    <p className='compact-text'>{roadsterInfo.mars_distance_km.toLocaleString()} km</p>
                  </li>
                </ul>
              </div>
              <div className='col-md-3 text-center mt-2 mx-auto'>
                <h3 className='border-custom'>Orbital Parameters</h3>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <strong>Orbit Type:</strong>
                    <p className='compact-text'>{roadsterInfo.orbit_type}</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Orbital Period:</strong>
                    <p className='compact-text'>{roadsterInfo.period_days.toFixed(1)} days</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Semi-Major Axis (AU):</strong>
                    <p className='compact-text'>{roadsterInfo.semi_major_axis_au.toFixed(4)}</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Apoapsis (AU):</strong>
                    <p className='compact-text'>{roadsterInfo.apoapsis_au.toFixed(4)}</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Periapsis (AU):</strong>
                    <p className='compact-text'>{roadsterInfo.periapsis_au.toFixed(4)}</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Eccentricity:</strong>
                    <p className='compact-text'>{roadsterInfo.eccentricity.toFixed(4)}</p>
                  </li>
                </ul>
              </div>
              <div className='col-md-3 text-center mt-2 mx-auto'>
                <h3 className='border-custom'>Orbital Orientation</h3>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <strong>Inclination:</strong>
                    <p className='compact-text'>{roadsterInfo.inclination.toFixed(2)}°</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Longitude of Ascending Node:</strong>
                    <p className='compact-text'>{roadsterInfo.longitude.toFixed(2)}°</p>
                  </li>
                  <li className='list-group-item'>
                    <strong>Argument of Periapsis:</strong>
                    <p className='compact-text'>{roadsterInfo.periapsis_arg.toFixed(2)}°</p>
                  </li>
                </ul>
              </div>
              {isAuthenticated
                ? (
                  <>
                    <div className='col-md-8 text-center mt-2 mx-auto'>
                      <h3 className='border-custom'>Roadster Position Graphic</h3>
                      <LazyWithSpinner>
                        <SolarSystemScene roadsterInfo={roadsterInfo} />
                      </LazyWithSpinner>
                    </div>
                    <div className='col-md-8 text-center mt-4 mx-auto'>
                      <h3 className='border-custom'>Launch Video</h3>
                      <LazyWithSpinner>
                        <Video
                          video={roadsterInfo.video}
                          title='Roadster Launch Video'
                        />
                      </LazyWithSpinner>
                    </div>
                  </>
                  )
                : (
                  <div className='text-center mt-2'>
                    <h3>Want to watch the launch video and the Roadster Position Graphic?{' '} <Link to='/signin' className='text-white'>Sign in</Link> or <Link to='/signup' className='text-white'>create an account!</Link></h3>
                  </div>
                  )}
            </div>

          </>
          )}
    </>
  )
}

export default Roadster

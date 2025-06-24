import Carousel from '@/components/Carousel'
import Spinner from '@/components/Spinner'
import { Link } from 'react-router-dom'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'

const Roadster = () => {
  const { roadsterInfo, isRoadsterInfoLoading } = useSpaceXContext()
  const { isAuthenticated } = useAuthContext()

  return (
    <>
      <h1>Elon Musk's Tesla Roadster</h1>
      <p>In 2018, SpaceX launched Elon Musk’s personal Tesla Roadster into space aboard the Falcon Heavy’s maiden flight. It was an iconic and unconventional payload designed to showcase the rocket’s capabilities.</p>
      <p>This section displays real-time data and details about the Roadster’s current journey through space.</p>
      {isRoadsterInfoLoading
        ? <Spinner />
        : (
          <div className='container my-5'>
            {roadsterInfo.flickr_images?.length > 0 && (
              <div className='mb-4'>
                <Carousel images={roadsterInfo.flickr_images} />
              </div>
            )}
            <p><strong>Launch Date (UTC):</strong> {new Date(roadsterInfo.launch_date_utc).toLocaleString()}</p>
            <p><strong>Launch Mass:</strong> {roadsterInfo.launch_mass_kg} kg</p>
            <p><strong>Speed:</strong> {roadsterInfo.speed_kph.toLocaleString()} km/h</p>
            <p><strong>Orbit Type:</strong> {roadsterInfo.orbit_type}</p>
            <p><strong>Distance from Earth:</strong> {roadsterInfo.earth_distance_km.toLocaleString()} km</p>
            <p><strong>Distance from Mars:</strong> {roadsterInfo.mars_distance_km.toLocaleString()} km</p>
            <div className='my-3'>
              <strong>Description:</strong>
              <p>{roadsterInfo.details}</p>
              <p><strong>Wikipedia Site:</strong>{' '}
                <a href={roadsterInfo.wikipedia} target='_blank' rel='noopener noreferrer'>
                  {roadsterInfo.wikipedia}
                </a>
              </p>
            </div>
            {isAuthenticated
              ? (
                <>
                  <h5>Launch Video</h5>
                  <div className='ratio ratio-16x9 my-4'>
                    <iframe
                      src={getYouTubeEmbedUrl(roadsterInfo.video)}
                      title='Roadster Launch Video'
                      allowFullScreen
                    />
                  </div>
                </>
                )
              : (
                <p> The launch video is available exclusively for registered users.{' '} <Link to='/signin'>Sign in</Link> or <Link to='/signup'>create an account</Link> to watch it. </p>
                )}
          </div>
          )}
    </>
  )
}

export default Roadster

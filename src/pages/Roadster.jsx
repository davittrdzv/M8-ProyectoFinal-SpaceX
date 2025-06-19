import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { getYouTubeEmbedUrl } from '@/utilities/getYouTubeEmbedUrl'

const Roadster = () => {
  const { roadsterInfo, isRoadsterInfoLoading } = useSpaceXContext()

  return (
    <>
      {isRoadsterInfoLoading
        ? <h1>Loading...</h1>
        : (
          <div className='container my-5'>
            <h1>{roadsterInfo.name}</h1>
            {roadsterInfo.flickr_images?.length > 0 && (
              <div className='mb-4'>
                <img
                  src={roadsterInfo.flickr_images[0]}
                  alt={`Image of ${roadsterInfo.name}`}
                  className='img-fluid rounded'
                />
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
            <div className='ratio ratio-16x9 my-4'>
              <iframe
                src={getYouTubeEmbedUrl(roadsterInfo.video)}
                title='Roadster Launch Video'
                allowFullScreen
              />
            </div>
          </div>
          )}
    </>
  )
}

export default Roadster

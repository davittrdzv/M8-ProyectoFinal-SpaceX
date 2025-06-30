import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import RocketSummary from '@/components/RocketSummary'
import Spinner from '@/components/Spinner'
import SpaceXLogo from '@/components/SpaceXLogo'

const Rockets = () => {
  const { rocketsInfo, isRocketsInfoLoading } = useSpaceXContext()
  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        <h1>Rockets</h1>
        <p>SpaceX rockets are the backbone of its space missions. From the reliable Falcon 9 to the powerful Falcon Heavy and the next-generation Starship, these launch vehicles are designed to deliver satellites, cargo, and humans into orbit — and beyond.</p>
        <p>This section highlights each rocket developed by SpaceX, along with key specifications and historical data.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4 justify-content-center mt-2'>
        {isRocketsInfoLoading
          ? <Spinner />
          : rocketsInfo.map(rocket => (
            <RocketSummary
              key={rocket.id}
              id={rocket.id}
              name={rocket.name}
              company={rocket.company}
              country={rocket.country}
              firstFlight={rocket.first_flight}
              picture={rocket.flickr_images[0]}
            />
          ))}
      </div>
    </>
  )
}

export default Rockets

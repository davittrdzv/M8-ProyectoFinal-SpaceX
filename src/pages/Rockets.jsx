import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import RocketSummary from '@/components/RocketSummary'

const Rockets = () => {
  const { rocketsInfo, isRocketsInfoLoading } = useSpaceXContext()
  return (
    <>
      <h1>Rockets</h1>
      {isRocketsInfoLoading
        ? <h1>Loading</h1>
        : rocketsInfo.map(rocket => (
          <RocketSummary
            key={rocket.nameid}
            name={rocket.name}
            company={rocket.company}
            country={rocket.country}
            firstFlight={rocket.first_flight}
            picture={rocket.flickr_images[0]}
          />
        ))}
    </>
  )
}

export default Rockets

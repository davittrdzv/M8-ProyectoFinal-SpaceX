import LaunchSummary from '@/components/LaunchSummary'
import Spinner from '@/components/Spinner'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { findById } from '@/utilities/findById'

const Launches = () => {
  const { launchesInfo, isLaunchesInfoLoading, rocketsInfo, isRocketsInfoLoading, launchpadsInfo, isLaunchpadsInfoLoading } = useSpaceXContext()

  return (
    <>
      <div className='container-fluid text-center'>
        <h1>Launches</h1>
        <p>SpaceX has carried out numerous launches over the years, sending satellites, cargo, astronauts, and even a car into space. This section showcases a complete list of SpaceX launches, including mission names, dates, outcomes, and other key details.</p>
        <p>Explore the history of SpaceX missions and see how the company has progressed toward making space more accessible.</p>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4 justify-content-center mt-2'>
        {isLaunchesInfoLoading && isRocketsInfoLoading && isLaunchpadsInfoLoading
          ? <Spinner />
          : launchesInfo.map(launch => (
            <LaunchSummary
              key={launch.id}
              id={launch.id}
              name={launch.name}
              date={launch.date_utc}
              success={launch.success === true ? 'Succesful' : 'Unsuccessful'}
              rocket={findById(rocketsInfo, launch.rocket)?.name}
              launchpad={findById(launchpadsInfo, launch.launchpad)?.full_name}
              picture={launch.links.patch.large}
            />
          ))}
      </div>
    </>
  )
}

export default Launches

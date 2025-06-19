import LaunchSummary from '@/components/LaunchSummary'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { findById } from '@/utilities/findById'

const Launches = () => {
  const { launchesInfo, isLaunchesInfoLoading, rocketsInfo, isRocketsInfoLoading, launchpadsInfo, isLaunchpadsInfoLoading } = useSpaceXContext()

  return (
    <>
      <h1>Launches</h1>
      {isLaunchesInfoLoading && isRocketsInfoLoading && isLaunchpadsInfoLoading
        ? <h1>Loading</h1>
        : launchesInfo.map(launch => (
          <LaunchSummary
            key={launch.id}
            id={launch.id}
            name={launch.name}
            date={launch.date_utc}
            success={launch.success === true ? 'Succesful' : 'Unsuccessful'}
            rocket={findById(rocketsInfo, launch.rocket)?.name}
            launchpad={findById(launchpadsInfo, launch.launchpad)?.locality}
            picture={launch.links.patch.large}
          />
        ))}
    </>
  )
}

export default Launches

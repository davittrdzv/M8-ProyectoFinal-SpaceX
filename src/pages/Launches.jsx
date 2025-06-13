import LaunchSummary from '@/components/LaunchSummary'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'

const Launches = () => {
  const { launchesInfo, isLaunchesInfoLoading } = useSpaceXContext()
  return (
    <>
      <h1>Launches</h1>
      {isLaunchesInfoLoading
        ? <h1>Loading</h1>
        : launchesInfo.map(launch => (
          <LaunchSummary
            key={launch.id}
            name={launch.name}
            date={launch.date_utc}
            success={launch.success === true ? 'Succesful' : 'Unsuccessful'}
            rocket='PENDIENTE'
            launchpad='PENDIENTE'
            picture={launch.links.flickr.original[0]}
          />
        ))}
    </>
  )
}

export default Launches

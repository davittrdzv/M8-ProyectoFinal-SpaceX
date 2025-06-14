import StarlinkSummary from '@/components/StarlinkSummary'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'

const Starlink = () => {
  const { starlinkInfo, isStarlinkInfoLoading } = useSpaceXContext()
  return (
    <>
      <h1>Starlink</h1>
      {isStarlinkInfoLoading
        ? <h1>Loading</h1>
        : starlinkInfo.map(starlink => (
          <StarlinkSummary
            key={starlink.id}
            name={starlink.spaceTrack.OBJECT_NAME}
            version={starlink.version}
            launchDate={starlink.spaceTrack.LAUNCH_DATE}
            decayed={starlink.spaceTrack.DECAYED}
            decayedDate={starlink.spaceTrack.DECAY_DATE}
          />
        ))}
    </>
  )
}

export default Starlink

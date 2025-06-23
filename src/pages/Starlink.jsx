import EarthGlobe from '@/components/EarthGlobe'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'

const Starlink = () => {
  const { starlinkInfo, isStarlinkInfoLoading } = useSpaceXContext()
  return (
    <>
      <h1>Starlink Satellites</h1>
      <p>Starlink is SpaceX’s ambitious satellite internet project, aiming to provide global broadband coverage through a vast network of low Earth orbit satellites.</p>
      <p>This page displays the real-time positions of all active Starlink satellites currently orbiting Earth.</p>
      {isStarlinkInfoLoading
        ? <h1>Loading</h1>
        : (
          <>
            <EarthGlobe starlinkData={starlinkInfo} />
          </>
          )}
    </>
  )
}

export default Starlink

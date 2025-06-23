import EarthGlobe from '@/components/EarthGlobe'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'

const Starlink = () => {
  const { starlinkInfo, isStarlinkInfoLoading } = useSpaceXContext()
  return (
    <>
      <h1>Starlink</h1>
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

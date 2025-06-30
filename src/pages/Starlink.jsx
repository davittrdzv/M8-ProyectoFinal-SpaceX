import EarthGlobe from '@/components/EarthGlobe'
import Spinner from '@/components/Spinner'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import SpaceXLogo from '@/components/SpaceXLogo'

const Starlink = () => {
  const { starlinkInfo, isStarlinkInfoLoading } = useSpaceXContext()
  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        <h1>Starlink Satellites</h1>
        <p>Starlink is SpaceX’s ambitious satellite internet project, aiming to provide global broadband coverage through a vast network of low Earth orbit satellites.</p>
        <p>This page displays the real-time positions of all active Starlink satellites currently orbiting Earth.</p>
        {isStarlinkInfoLoading
          ? <Spinner />
          : (
            <>
              <EarthGlobe starlinkData={starlinkInfo} />
            </>
            )}
      </div>
    </>
  )
}

export default Starlink

import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import LaunchDetailsCard from '@/components/LaunchDetailsCard'
import Spinner from '@/components/Spinner'
import { getOneLaunchSpaceXService } from '@/services/spaceXServices'
import SpaceXLogo from '@/components/SpaceXLogo'

const LaunchDetails = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [launch, setLaunch] = useState(null)

  useEffect(() => {
    const fetchLaunch = async () => {
      try {
        const { data } = await getOneLaunchSpaceXService(id)
        setLaunch(data)
      } catch (error) {
        console.error('Error fetching Launch:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchLaunch()
  }, [id])

  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        {isLoading
          ? <Spinner />
          : launch
            ? <LaunchDetailsCard launch={launch} />
            : <Navigate to='/not-found' replace />}
      </div>
    </>
  )
}

export default LaunchDetails

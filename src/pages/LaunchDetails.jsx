import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import LaunchDetailsCard from '@/components/LaunchDetailsCard'
import { getOneLaunchSpaceXService } from '@/services/spaceXServices'

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
      <div>LaunchDetails</div>
      {isLoading
        ? <h1>Loading...</h1>
        : launch
          ? <LaunchDetailsCard launch={launch} />
          : <Navigate to='/not-found' replace />}

    </>
  )
}

export default LaunchDetails

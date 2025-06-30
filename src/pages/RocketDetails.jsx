import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import RocketDetailsCard from '@/components/RocketDetailsCard'
import Spinner from '@/components/Spinner'
import { getOneRocketSpaceXService } from '@/services/spaceXServices'
import SpaceXLogo from '@/components/SpaceXLogo'

const RocketDetails = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [rocket, setRocket] = useState(null)

  useEffect(() => {
    const fetchRocket = async () => {
      try {
        const { data } = await getOneRocketSpaceXService(id)
        setRocket(data)
      } catch (error) {
        console.error('Error fetching Rocket:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchRocket()
  }, [id])

  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      {isLoading
        ? <Spinner />
        : rocket
          ? <RocketDetailsCard {...rocket} />
          : <Navigate to='/not-found' replace />}
    </>
  )
}

export default RocketDetails

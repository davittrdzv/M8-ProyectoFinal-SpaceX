import { useEffect, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import RocketDetailsCard from '@/components/RocketDetailsCard'
import { getOneRocketSpaceXService } from '@/services/spaceXServices'

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
      <div>RocketDetails</div>
      {isLoading
        ? <h1>Loading...</h1>
        : rocket
          ? <RocketDetailsCard {...rocket} />
          : <Navigate to='/not-found' replace />}

    </>
  )
}

export default RocketDetails

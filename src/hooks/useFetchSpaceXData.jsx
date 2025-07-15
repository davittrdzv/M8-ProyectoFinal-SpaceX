import { useEffect } from 'react'

export const useFetchSpaceXData = (
  setDataState,
  setLoadingState,
  service,
  message,
  optionalTransform
) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service()
        const finalData = optionalTransform
          ? optionalTransform(response.data)
          : response.data
        setDataState(finalData)
      } catch (error) {
        console.error(`Error fetching ${message} SpaceX info:`, error)
      } finally {
        setLoadingState(false)
      }
    }

    fetchData()
  }, [setDataState, setLoadingState, service, message, optionalTransform])
}

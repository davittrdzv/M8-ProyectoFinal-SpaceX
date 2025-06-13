import { createContext, useEffect, useState } from 'react'
import {
  getCompanySpaceXService,
  getLaunchesSpaceXService,
  getRocketsSpaceXService,
  getRoadsterSpaceXService,
  getStarlinkSpaceXService,
  getHistorySpaceXService
} from '@/services/spaceXservices'

const SpaceXContext = createContext()

const SpaceXProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState({})
  const [launchesInfo, setLaunchesInfo] = useState([])
  const [rocketsInfo, setRocketsInfo] = useState([])
  const [roadsterInfo, setRoadsterInfo] = useState({})
  const [starlinkInfo, setStarlinkInfo] = useState([])
  const [historyInfo, setHistoryInfo] = useState([])
  const [isCompanyInfoLoading, setIsCompanyInfoLoading] = useState(true)
  const [isLaunchesInfoLoading, setIslaunchesInfoLoading] = useState(true)
  const [isRocketsInfoLoading, setIsRocketsInfoLoading] = useState(true)
  const [isRoadsterInfoLoading, setRoadsterInfoLoading] = useState(true)
  const [isStarlinkInfoLoading, setStarlinkInfoLoading] = useState(true)
  const [isHistoryInfoLoading, setHistoryInfoLoading] = useState(true)

  const fetchSpaceXInfo = async () => {
    try {
      const companyResponse = await getCompanySpaceXService()
      const launchesResponse = await getLaunchesSpaceXService()
      const rocketsResponse = await getRocketsSpaceXService()
      const roadsterResponse = await getRoadsterSpaceXService()
      const starlinkResponse = await getStarlinkSpaceXService()
      const historyResponse = await getHistorySpaceXService()
      setCompanyInfo(companyResponse.data)
      setLaunchesInfo(launchesResponse.data)
      setRocketsInfo(rocketsResponse.data)
      setRoadsterInfo(roadsterResponse.data)
      setStarlinkInfo(starlinkResponse.data)
      setHistoryInfo(historyResponse.data)
    } catch (error) {
      console.error('Error fetching SpaceX info:', error)
    } finally {
      setIsCompanyInfoLoading(false)
      setIslaunchesInfoLoading(false)
      setIsRocketsInfoLoading(false)
      setRoadsterInfoLoading(false)
      setStarlinkInfoLoading(false)
      setHistoryInfoLoading(false)
    }
  }

  useEffect(() => {
    fetchSpaceXInfo()
  }, [])

  // useEffect con console.logs solo para efectos de testeo y validar información retornada en consola.
  useEffect(() => {
    console.log('Company Info: ', companyInfo)
    console.log('Launches Info: ', launchesInfo)
    console.log('Rockets Info: ', rocketsInfo)
    console.log('Roadster Info: ', roadsterInfo)
    console.log('Starlink Info: ', starlinkInfo)
    console.log('History Info: ', historyInfo)
    console.log('Launches Array Length: ', launchesInfo.length)
    console.log('Rockets Array Length: ', rocketsInfo.length)
    console.log('Starlink Array Length: ', starlinkInfo.length)
    console.log('History Array Length: ', historyInfo.length)
  }, [companyInfo, launchesInfo, rocketsInfo, roadsterInfo, starlinkInfo, historyInfo])

  const data = {
    companyInfo,
    launchesInfo,
    rocketsInfo,
    roadsterInfo,
    starlinkInfo,
    historyInfo,
    isCompanyInfoLoading,
    isLaunchesInfoLoading,
    isRocketsInfoLoading,
    isRoadsterInfoLoading,
    isStarlinkInfoLoading,
    isHistoryInfoLoading
  }

  return (
    <SpaceXContext.Provider value={data}>
      {children}
    </SpaceXContext.Provider>
  )
}

export { SpaceXContext, SpaceXProvider }

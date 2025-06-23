import { createContext, useEffect, useState } from 'react'
import {
  getCompanySpaceXService,
  getLaunchesSpaceXService,
  getRocketsSpaceXService,
  getRoadsterSpaceXService,
  getStarlinkSpaceXService,
  getHistorySpaceXService,
  getLaunchpadsSpaceXService,
  getCrewSpaceXService,
  getShipsSpaceXService,
  getCapsulesSpaceXService,
  getPayloadsSpaceXService,
  getCoresSpaceXService,
  getLandpadsSpaceXService,

} from '@/services/spaceXServices'

const SpaceXContext = createContext()

const SpaceXProvider = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState({})
  const [launchesInfo, setLaunchesInfo] = useState([])
  const [rocketsInfo, setRocketsInfo] = useState([])
  const [roadsterInfo, setRoadsterInfo] = useState({})
  const [starlinkInfo, setStarlinkInfo] = useState([])
  const [historyInfo, setHistoryInfo] = useState([])
  const [launchpadsInfo, setLaunchpadsInfo] = useState([])
  const [crewInfo, setCrewInfo] = useState([])
  const [shipsInfo, setShipsInfo] = useState([])
  const [capsulesInfo, setCapsulesInfo] = useState([])
  const [payloadsInfo, setPayloadsInfo] = useState([])
  const [coresInfo, setCoresInfo] = useState([])
  const [landpadsInfo, setLandpadsInfo] = useState([])
  const [isCompanyInfoLoading, setIsCompanyInfoLoading] = useState(true)
  const [isLaunchesInfoLoading, setIslaunchesInfoLoading] = useState(true)
  const [isRocketsInfoLoading, setIsRocketsInfoLoading] = useState(true)
  const [isRoadsterInfoLoading, setRoadsterInfoLoading] = useState(true)
  const [isStarlinkInfoLoading, setStarlinkInfoLoading] = useState(true)
  const [isHistoryInfoLoading, setHistoryInfoLoading] = useState(true)
  const [isLaunchpadsInfoLoading, setLaunchpadsInfoLoading] = useState(true)
  const [isCrewInfoLoading, setIsCrewInfoLoading] = useState(true)
  const [isShipsInfoLoading, setIsShipsInfoLoading] = useState(true)
  const [isCapsulesInfoLoading, setIsCapsulesInfoLoading] = useState(true)
  const [isPayloadsInfoLoading, setIsPayloadsInfoLoading] = useState(true)
  const [isCoresInfoLoading, setIsCoresInfoLoading] = useState(true)
  const [isLandpadsInfoLoading, setIsLandpadsInfoLoading] = useState(true)

  const fetchSpaceXInfo = async () => {
    try {
      const companyResponse = await getCompanySpaceXService()
      const launchesResponse = await getLaunchesSpaceXService()
      const rocketsResponse = await getRocketsSpaceXService()
      const roadsterResponse = await getRoadsterSpaceXService()
      const starlinkResponse = await getStarlinkSpaceXService()
      const historyResponse = await getHistorySpaceXService()
      const launchpadsResponse = await getLaunchpadsSpaceXService()
      const crewResponse = await getCrewSpaceXService()
      const shipsResponse = await getShipsSpaceXService()
      const capsulesResponse = await getCapsulesSpaceXService()
      const payloadsResponse = await getPayloadsSpaceXService()
      const coresResponse = await getCoresSpaceXService()
      const landpadsResponse = await getLandpadsSpaceXService()
      setCompanyInfo(companyResponse.data)
      setLaunchesInfo(launchesResponse.data)
      setRocketsInfo(rocketsResponse.data)
      setRoadsterInfo(roadsterResponse.data)
      setStarlinkInfo(starlinkResponse.data.filter(starlink => starlink.spaceTrack.DECAYED === 0))
      setHistoryInfo(historyResponse.data)
      setLaunchpadsInfo(launchpadsResponse.data)
      setCrewInfo(crewResponse.data)
      setShipsInfo(shipsResponse.data)
      setCapsulesInfo(capsulesResponse.data)
      setPayloadsInfo(payloadsResponse.data)
      setCoresInfo(coresResponse.data)
      setLandpadsInfo(landpadsResponse.data)
    } catch (error) {
      console.error('Error fetching SpaceX info:', error)
    } finally {
      setIsCompanyInfoLoading(false)
      setIslaunchesInfoLoading(false)
      setIsRocketsInfoLoading(false)
      setRoadsterInfoLoading(false)
      setStarlinkInfoLoading(false)
      setHistoryInfoLoading(false)
      setLaunchpadsInfoLoading(false)
      setIsCrewInfoLoading(false)
      setIsShipsInfoLoading(false)
      setIsCapsulesInfoLoading(false)
      setIsPayloadsInfoLoading(false)
      setIsCoresInfoLoading(false)
      setIsLandpadsInfoLoading(false)
    }
  }

  useEffect(() => {
    fetchSpaceXInfo()
  }, [])

  const data = {
    companyInfo,
    launchesInfo,
    rocketsInfo,
    roadsterInfo,
    starlinkInfo,
    historyInfo,
    launchpadsInfo,
    crewInfo,
    shipsInfo,
    capsulesInfo,
    payloadsInfo,
    coresInfo,
    landpadsInfo,
    isCompanyInfoLoading,
    isLaunchesInfoLoading,
    isRocketsInfoLoading,
    isRoadsterInfoLoading,
    isStarlinkInfoLoading,
    isHistoryInfoLoading,
    isLaunchpadsInfoLoading,
    isCrewInfoLoading,
    isShipsInfoLoading,
    isCapsulesInfoLoading,
    isPayloadsInfoLoading,
    isCoresInfoLoading,
    isLandpadsInfoLoading
  }

  return (
    <SpaceXContext.Provider value={data}>
      {children}
    </SpaceXContext.Provider>
  )
}

export { SpaceXContext, SpaceXProvider }

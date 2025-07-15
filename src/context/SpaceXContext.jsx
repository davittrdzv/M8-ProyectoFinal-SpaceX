import { createContext, useState } from 'react'
import { useFetchSpaceXData } from '@/hooks/useFetchSpaceXData'
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
  const [isLaunchesInfoLoading, setIsLaunchesInfoLoading] = useState(true)
  const [isRocketsInfoLoading, setIsRocketsInfoLoading] = useState(true)
  const [isRoadsterInfoLoading, setIsRoadsterInfoLoading] = useState(true)
  const [isStarlinkInfoLoading, setIsStarlinkInfoLoading] = useState(true)
  const [isHistoryInfoLoading, setIsHistoryInfoLoading] = useState(true)
  const [isLaunchpadsInfoLoading, setIsLaunchpadsInfoLoading] = useState(true)
  const [isCrewInfoLoading, setIsCrewInfoLoading] = useState(true)
  const [isShipsInfoLoading, setIsShipsInfoLoading] = useState(true)
  const [isCapsulesInfoLoading, setIsCapsulesInfoLoading] = useState(true)
  const [isPayloadsInfoLoading, setIsPayloadsInfoLoading] = useState(true)
  const [isCoresInfoLoading, setIsCoresInfoLoading] = useState(true)
  const [isLandpadsInfoLoading, setIsLandpadsInfoLoading] = useState(true)

  useFetchSpaceXData(setCompanyInfo, setIsCompanyInfoLoading, getCompanySpaceXService, 'Company', undefined)
  useFetchSpaceXData(setLaunchesInfo, setIsLaunchesInfoLoading, getLaunchesSpaceXService, 'Launches', undefined)
  useFetchSpaceXData(setRocketsInfo, setIsRocketsInfoLoading, getRocketsSpaceXService, 'Rockets', undefined)
  useFetchSpaceXData(setRoadsterInfo, setIsRoadsterInfoLoading, getRoadsterSpaceXService, 'Roadster', undefined)
  useFetchSpaceXData(setStarlinkInfo, setIsStarlinkInfoLoading, getStarlinkSpaceXService, 'Starlink', data => data.filter(s => s.spaceTrack.DECAYED === 0))
  useFetchSpaceXData(setHistoryInfo, setIsHistoryInfoLoading, getHistorySpaceXService, 'History', undefined)
  useFetchSpaceXData(setLaunchpadsInfo, setIsLaunchpadsInfoLoading, getLaunchpadsSpaceXService, 'Launchpads', undefined)
  useFetchSpaceXData(setCrewInfo, setIsCrewInfoLoading, getCrewSpaceXService, 'Crew', undefined)
  useFetchSpaceXData(setShipsInfo, setIsShipsInfoLoading, getShipsSpaceXService, 'Ships', undefined)
  useFetchSpaceXData(setCapsulesInfo, setIsCapsulesInfoLoading, getCapsulesSpaceXService, 'Capsules', undefined)
  useFetchSpaceXData(setPayloadsInfo, setIsPayloadsInfoLoading, getPayloadsSpaceXService, 'Payloads', undefined)
  useFetchSpaceXData(setCoresInfo, setIsCoresInfoLoading, getCoresSpaceXService, 'Cores', undefined)
  useFetchSpaceXData(setLandpadsInfo, setIsLandpadsInfoLoading, getLandpadsSpaceXService, 'Landpads', undefined)

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

import { useEffect, useState, lazy } from 'react'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import LazyWithSpinner from '@/utilities/LazyWithSpinner'
import { monthNames } from '@/utilities/months'
import Spinner from '@/components/Spinner'
import SpaceXLogo from '@/components/SpaceXLogo'
const EarthGlobe = lazy(() => import('@/components/EarthGlobe'))

const Starlink = () => {
  const { starlinkInfo, isStarlinkInfoLoading } = useSpaceXContext()

  const [filteredSatellites, setFilteredSatellites] = useState([])

  const [launchYear, setLaunchYear] = useState([])
  const [launchMonth, setLaunchMonth] = useState([])
  const [satVersion, setSatVersion] = useState([])

  const [selectedYear, setSelectedYear] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedVersion, setSelectedVersion] = useState('')

  useEffect(() => {
    if (!isStarlinkInfoLoading && starlinkInfo.length > 0) {
      const filteredSats = starlinkInfo.filter(sat => {
        const date = sat.spaceTrack.LAUNCH_DATE
        const year = date?.slice(0, 4) ?? 'Unknown Year'
        const month = date?.slice(5, 7) ?? 'Unknown Month'
        const version = sat.version ?? 'Unknown Version'

        return (
          (selectedYear === '' || year === selectedYear) &&
          (selectedMonth === '' || month === selectedMonth) &&
          (selectedVersion === '' || version === selectedVersion)
        )
      })
      setFilteredSatellites(filteredSats)
    }
  }, [starlinkInfo, isStarlinkInfoLoading, selectedYear, selectedMonth, selectedVersion])

  useEffect(() => {
    if (!isStarlinkInfoLoading && starlinkInfo.length > 0) {
      const uniqueYears = Array.from(
        new Set(starlinkInfo.map(sat => sat.spaceTrack.LAUNCH_DATE?.slice(0, 4) ?? 'Unknown Year'))
      ).sort()
      setLaunchYear(uniqueYears)

      const uniqueMonths = Array.from(
        new Set(starlinkInfo.map(sat => sat.spaceTrack.LAUNCH_DATE?.slice(5, 7) ?? 'Unknown Month'))
      ).sort()
      setLaunchMonth(uniqueMonths)

      const uniqueVersions = Array.from(
        new Set(starlinkInfo.map(sat => sat.version ?? 'Unknown Version'))
      ).sort()
      setSatVersion(uniqueVersions)
    }
  }, [isStarlinkInfoLoading, starlinkInfo])

  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        <h1>Starlink Satellites</h1>
        <p>Starlink is SpaceX’s ambitious satellite internet project, aiming to provide global broadband coverage through a vast network of low Earth orbit satellites.</p>
        <p>This page displays the real-time positions of all active Starlink satellites currently orbiting Earth.</p>
        {isStarlinkInfoLoading
          ? (
            <Spinner />
            )
          : (
            <>
              <h4>{starlinkInfo.length} Satellites currently in Orbit</h4>
              {(selectedYear !== '' || selectedMonth !== '' || selectedVersion !== '') &&
                <>
                  <span>Applied Filters:</span>{' '}
                  {selectedYear !== '' && <span>Year of Launch: {selectedYear}</span>}{' '}
                  {selectedMonth !== '' && <span>Month of Launch: {monthNames[selectedMonth] || selectedMonth}</span>}{' '}
                  {selectedVersion !== '' && <span>Satellite Version: {selectedVersion}</span>}
                  <p>{filteredSatellites.length} Satellites Found</p>
                </>}
              <form className='container border-custom mb-2'>
                <div>
                  <p className='compact-text'>Filter Satellites:</p>
                  <select
                    className='m-2'
                    id='launchYear'
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value=''>Filter by Year of Launch</option>
                    {launchYear.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                  <select
                    className='m-2'
                    id='launchMonth'
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value=''>Filter by Month of Launch</option>
                    {launchMonth.map(month => (
                      <option key={month} value={month}>
                        {monthNames[month] || month}
                      </option>
                    ))}
                  </select>
                  <select
                    className='m-2'
                    id='satVersion'
                    value={selectedVersion}
                    onChange={(e) => setSelectedVersion(e.target.value)}
                  >
                    <option value=''>Filter by Satellite Version</option>
                    {satVersion.map(version => (
                      <option key={version} value={version}>{version}</option>
                    ))}
                  </select>
                </div>
                {(selectedYear !== '' || selectedMonth !== '' || selectedVersion !== '') &&
                  <div>
                    <button
                      type='button'
                      className='btn btn-sm btn-custom m-2'
                      onClick={() => {
                        setSelectedYear('')
                        setSelectedMonth('')
                        setSelectedVersion('')
                      }}
                    >
                      Reset Filters
                    </button>
                  </div>}
              </form>
              <LazyWithSpinner>
                <EarthGlobe starlinkData={filteredSatellites} />
              </LazyWithSpinner>
            </>
            )}
      </div>
    </>
  )
}

export default Starlink

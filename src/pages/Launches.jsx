import { useState, useEffect } from 'react'
import LaunchSummary from '@/components/LaunchSummary'
import SpaceXLogo from '@/components/SpaceXLogo'
import Spinner from '@/components/Spinner'
import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import { findById } from '@/utilities/findById'
import { monthNames } from '@/utilities/months'
import { formatSuccess } from '@/utilities/formatSuccess'

const Launches = () => {
  const { launchesInfo, isLaunchesInfoLoading, rocketsInfo, isRocketsInfoLoading, launchpadsInfo, isLaunchpadsInfoLoading } = useSpaceXContext()

  const [filteredLaunches, setFilteredLaunches] = useState([])

  const [success, setSuccess] = useState([])
  const [launchYear, setLaunchYear] = useState([])
  const [launchMonth, setLaunchMonth] = useState([])

  const [selectedRocket, setSelectedRocket] = useState('')
  const [selectedSuccess, setSelectedSuccess] = useState('')
  const [selectedLaunchpad, setSelectedLaunchpad] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')

  useEffect(() => {
    if (!isLaunchesInfoLoading && launchesInfo.length > 0) {
      const filteredLaunches = launchesInfo.filter(launch => {
        const rocket = launch.rocket
        const success = launch.success
        const launchpad = launch.launchpad
        const year = launch.date_utc.slice(0, 4)
        const month = launch.date_utc.slice(5, 7)

        return (
          (selectedRocket === '' || rocket === selectedRocket) &&
          (selectedSuccess === '' ||
            success === (selectedSuccess === 'true'
              ? true
              : selectedSuccess === 'false'
                ? false
                : null)) &&
          (selectedLaunchpad === '' || launchpad === selectedLaunchpad) &&
          (selectedYear === '' || year === selectedYear) &&
          (selectedMonth === '' || month === selectedMonth)
        )
      })
      setFilteredLaunches(filteredLaunches)
    }
  }, [launchesInfo, isLaunchesInfoLoading, selectedRocket, selectedSuccess, selectedLaunchpad, selectedYear, selectedMonth])

  useEffect(() => {
    if (!isLaunchesInfoLoading && launchesInfo.length > 0) {
      setFilteredLaunches(launchesInfo)

      const uniqueSuccess = Array.from(
        new Set(launchesInfo.map(launch =>
          launch.success === null ? 'null' : String(launch.success)
        ))
      ).sort()
      setSuccess(uniqueSuccess)

      const uniqueYears = Array.from(
        new Set(launchesInfo.map(launch => launch.date_utc.slice(0, 4) ?? 'Unknown Year'))
      ).sort()
      setLaunchYear(uniqueYears)

      const uniqueMonths = Array.from(
        new Set(launchesInfo.map(launch => launch.date_utc.slice(5, 7) ?? 'Unknown Month'))
      ).sort()
      setLaunchMonth(uniqueMonths)
    }
  }, [isLaunchesInfoLoading, launchesInfo])

  return (
    <>
      <SpaceXLogo className='logo-spacex-w mb-4 mt-custom mx-auto d-block' />
      <div className='container-fluid text-center'>
        <h1>Launches</h1>
        <p>SpaceX has carried out numerous launches over the years, sending satellites, cargo, astronauts, and even a car into space. This section showcases a complete list of SpaceX launches, including mission names, dates, outcomes, and other key details.</p>
        <p>Explore the history of SpaceX missions and see how the company has progressed toward making space more accessible.</p>
      </div>
      {
        isLaunchesInfoLoading && isRocketsInfoLoading && isLaunchpadsInfoLoading
          ? <Spinner />
          : (
            <>
              <div className='container-fluid text-center'>
                <h4>{launchesInfo.length} Recorded Launches</h4>
                {(selectedRocket !== '' || selectedSuccess !== '' || selectedLaunchpad !== '' || selectedYear !== '' || selectedMonth !== '') &&
                  <>
                    <span>Applied Filters:</span>{' '}
                    {selectedRocket !== '' && <span>Rocket: {findById(rocketsInfo, selectedRocket)?.name}</span>}{' '}
                    {selectedSuccess !== '' && (
                      <span>
                        Success: {formatSuccess(selectedSuccess === 'true' ? true : selectedSuccess === 'false' ? false : null)}
                      </span>
                    )}{' '}
                    {selectedYear !== '' && <span>Year of Launch: {selectedYear}</span>}{' '}
                    {selectedMonth !== '' && <span>Month of Launch: {monthNames[selectedMonth] || selectedMonth}</span>}{' '}
                    {selectedLaunchpad !== '' && <span>Launchpad: {findById(launchpadsInfo, selectedLaunchpad)?.full_name}</span>}
                    <p>{filteredLaunches.length} Launches Found</p>
                  </>}
                <form className='container border-custom mb-2'>
                  <div>
                    <p className='compact-text'>Filter Launches:</p>
                    <select
                      className='m-2'
                      id='rocket'
                      value={selectedRocket}
                      onChange={(e) => setSelectedRocket(e.target.value)}
                    >
                      <option value=''>Filter by Rocket</option>
                      {rocketsInfo.map(rocket => (
                        <option key={rocket.id} value={rocket.id}>{rocket.name}</option>
                      ))}
                    </select>
                    <select
                      className='m-2'
                      id='success'
                      value={selectedSuccess}
                      onChange={(e) => setSelectedSuccess(e.target.value)}
                    >
                      <option value=''>Filter by Success</option>
                      {success.map(e => (
                        <option key={e} value={e}>
                          {formatSuccess(e === 'true' ? true : e === 'false' ? false : null)}
                        </option>
                      ))}
                    </select>

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
                      id='launchpad'
                      value={selectedLaunchpad}
                      onChange={(e) => setSelectedLaunchpad(e.target.value)}
                    >
                      <option value=''>Filter by Launchpad</option>
                      {launchpadsInfo.map(launchpad => (
                        <option key={launchpad.id} value={launchpad.id}>{launchpad.full_name}</option>
                      ))}
                    </select>
                  </div>
                  {(selectedRocket !== '' || selectedSuccess !== '' || selectedLaunchpad !== '' || selectedYear !== '' || selectedMonth !== '') &&
                    <div>
                      <button
                        type='button'
                        className='btn btn-sm btn-custom m-2'
                        onClick={() => {
                          setSelectedRocket('')
                          setSelectedSuccess('')
                          setSelectedYear('')
                          setSelectedMonth('')
                          setSelectedLaunchpad('')
                        }}
                      >
                        Reset Filters
                      </button>
                    </div>}
                </form>
              </div>
              <div className='row row-cols-1 row-cols-md-4 g-4 justify-content-center mt-2'>
                {filteredLaunches.map(launch => (
                  <LaunchSummary
                    key={launch.id}
                    id={launch.id}
                    name={launch.name}
                    date={launch.date_utc}
                    success={formatSuccess(launch.success)}
                    rocket={findById(rocketsInfo, launch.rocket)?.name}
                    launchpad={findById(launchpadsInfo, launch.launchpad)?.full_name}
                    picture={launch.links.patch.large}
                  />
                ))}
              </div>
            </>
            )
        }

    </>
  )
}

export default Launches

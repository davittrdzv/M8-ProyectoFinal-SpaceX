import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import HistoricEventCard from '@/components/HistoricEventCard'
import Spinner from '@/components/Spinner'

const History = () => {
  const { historyInfo, isHistoryInfoLoading } = useSpaceXContext()
  return (
    <>
      <div className='container-fluid text-center'>
        <h1>SpaceX Historic Events</h1>
        <p>SpaceX has achieved many milestones since its founding in 2002 — from the first privately developed rocket to reach orbit to launching astronauts into space.</p>
        <p>This section highlights key historical events that have shaped the company's journey and contributed to the evolution of space exploration.</p>
      </div>
      {isHistoryInfoLoading
        ? (
          <Spinner />
          )
        : (
          <>
            {historyInfo.map(event => (
              <HistoricEventCard
                key={event.id}
                title={event.title}
                date={event.event_date_utc}
                details={event.details}
                article={event.links.article}
              />
            ))}
          </>
          )}
    </>
  )
}

export default History

import { useSpaceXContext } from '@/hooks/useSpaceXContext'
import HistoricEventCard from '@/components/HistoricEventCard'

const History = () => {
  const { historyInfo, isHistoryInfoLoading } = useSpaceXContext()
  return (
    <>
      {isHistoryInfoLoading
        ? (
          <h1>Loading...</h1>
          )
        : (
          <>
            <h1>SpaceX's Historic Events</h1>
            {historyInfo.map(event => (
              <HistoricEventCard
                key={event.id}
                title={event.title}
                date={new Date(event.event_date_utc).toLocaleString()}
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

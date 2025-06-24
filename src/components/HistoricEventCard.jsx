import { Link } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const HistoricEventsCard = ({ title, date, details, article }) => {
  const { isAuthenticated } = useAuthContext()

  return (
    <div className='card mt-1'>
      <h5 className='card-header'>{title}</h5>
      <div className='card-body'>
        <h6 className='card-title'>{details}</h6>
        <p className='card-text'>
          Date: {date}
        </p>
        {article && (
          isAuthenticated
            ? (
              <a href={article} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
                Article
              </a>
              )
            : (
              <span>
                The external article is available exclusively for registered users.{' '}
                <Link to='/signin'>Sign in</Link> or <Link to='/signup'>create an account</Link> for access.
              </span>
              )
        )}
      </div>
    </div>
  )
}

export default HistoricEventsCard

import { Link } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import { standardizeDateFormat } from '@/utilities/standardizeDateFormat'

const HistoricEventsCard = ({ title, date, details, article }) => {
  const { isAuthenticated } = useAuthContext()

  return (
    <div className='col-md-15 text-center mt-2'>
      <h3>{title}</h3>
      <ul className='list-group list-group-flush'>
        <li className='list-group-item'>
          <strong>Date:</strong>{' '}{standardizeDateFormat(date)}
        </li>
        <li className='list-group-item'>
          {details}
        </li>
        {article && (
          isAuthenticated
            ? (
              <li className='list-group-item'>
                <a href={article} className='btn btn-custom' target='_blank' rel='noopener noreferrer'>
                  Article
                </a>
              </li>
              )
            : (
              <li className='list-group-item'>
                The external article is available exclusively for registered users.{' '}
                <Link to='/signin' className='text-black'>Sign in</Link> or <Link to='/signup' className='text-black'>create an account</Link> for access.
              </li>
              )
        )}
      </ul>
    </div>
  )
}

export default HistoricEventsCard

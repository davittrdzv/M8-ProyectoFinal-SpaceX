const HistoricEventsCard = ({ title, date, details, article }) => {
  return (
    <div className='card mt-1'>
      <h5 className='card-header'>{title}</h5>
      <div className='card-body'>
        <h6 className='card-title'>{details}</h6>
        <p className='card-text'>
          Date: {date}
        </p>
        {article &&
          <a href={article} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>
            Article
          </a>}
      </div>
    </div>
  )
}

export default HistoricEventsCard

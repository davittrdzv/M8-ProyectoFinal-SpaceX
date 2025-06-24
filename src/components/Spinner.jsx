import '@/styles/spinner.css'

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '300px' }}>
      <div className='text-center d-flex flex-column align-items-center gap-3'>
        <div>Loading content, please wait.</div>
        <div className='spinner' />
      </div>
    </div>
  )
}

export default Spinner

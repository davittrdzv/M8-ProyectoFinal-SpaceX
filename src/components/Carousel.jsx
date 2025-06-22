const Carousel = ({ images }) => {
  return (
    <div id='carouselIndicators' className='carousel slide'>
      <div className='carousel-indicators'>
        {images.map((_, index) => (
          <button
            key={index}
            type='button'
            data-bs-target='#carouselIndicators'
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className='carousel-inner'>
        {images.map((imgUrl, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={imgUrl} className='d-block w-100' alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carousel

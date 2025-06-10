const Footer = () => {
  return (
    <footer className='bg-dark text-white py-4 mt-5 border-top'>
      <div className='container text-center small'>
        <p className='mb-1'>
          &copy; 2025 David's SpaceX Explorer. All rights reserved.
        </p>
        <p className='mb-1'>
          Data provided by{' '}
          <a
            href='https://github.com/r-spacex/SpaceX-API'
            target='_blank'
            rel='noopener noreferrer'
            className='text-white text-decoration-underline'
          >
            SpaceX API
          </a>. This site is for educational purposes only.
        </p>
        <p className='mb-0'>
          I do not own any intellectual property rights to SpaceX data, branding, or assets.
        </p>
      </div>
    </footer>
  )
}

export default Footer

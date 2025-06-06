const NavBar = () => {
  return (
    <nav
      className='navbar navbar-expand-md navbar-dark bg-dark'
      aria-label='Fourth navbar example'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          DRV SpaceX Explorer
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarsExample04'
          aria-controls='navbarsExample04'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarsExample04'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/launches'>
                Launches
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/rockets'>
                Rockets
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/roadster'>
                Roadster
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/starlink'>
                Starlink
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/history'>
                History
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/signin'>
                Sign In
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='/signup'>
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default NavBar

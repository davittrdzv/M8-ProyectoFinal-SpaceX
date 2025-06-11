import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav
      className='navbar navbar-expand-md navbar-dark bg-dark'
      aria-label='Fourth navbar example'
    >
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          DRV SpaceX Explorer
        </NavLink>
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
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/launches'>
                Launches
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/rockets'>
                Rockets
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/roadster'>
                Roadster
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/starlink'>
                Starlink
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/history'>
                Historic Events
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/about'>
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/signin'>
                Sign In
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/signup'>
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

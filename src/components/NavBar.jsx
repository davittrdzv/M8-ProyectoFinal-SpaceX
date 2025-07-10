import * as bootstrap from 'bootstrap'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const NavBar = () => {
  const { isAuthenticated, userName, logOutFunction } = useAuthContext()

  const collapseNavBar = () => {
    const navbar = document.getElementById('navigationBar')
    const bsCollapse = bootstrap.Collapse.getInstance(navbar)
    if (bsCollapse) {
      bsCollapse.hide()
    }
  }
  return (
    <nav
      className='navbar navbar-expand-md fixed-top navbar-dark bg-dark'
      aria-label='Navigation Bar'
    >
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/' onClick={() => collapseNavBar()}>
          DRV SpaceX Explorer
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navigationBar'
          aria-controls='navigationBar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navigationBar'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/' onClick={() => collapseNavBar()}>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/launches' onClick={() => collapseNavBar()}>
                Launches
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/rockets' onClick={() => collapseNavBar()}>
                Rockets
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/roadster' onClick={() => collapseNavBar()}>
                Roadster
              </NavLink>
            </li>
            {isAuthenticated &&
              <>
                <li className='nav-item'>
                  <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/starlink' onClick={() => collapseNavBar()}>
                    Starlink
                  </NavLink>
                </li>
              </>}
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/history' onClick={() => collapseNavBar()}>
                Historic Events
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/about' onClick={() => collapseNavBar()}>
                About
              </NavLink>
            </li>
            <li className='nav-item d-flex align-items-center'>
              <span>
                {Object.keys(userName).length > 0 ? `Hi, ${userName.firstName} ${userName.lastName}!` : 'Hi, Guest!'}
              </span>
            </li>
            {!isAuthenticated
              ? (
                <>
                  <li className='nav-item'>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/signin' onClick={() => collapseNavBar()}>
                      Sign In
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/signup' onClick={() => collapseNavBar()}>
                      Sign Up
                    </NavLink>
                  </li>
                </>
                )
              : (
                <>
                  <li className='nav-item'>
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} aria-current='page' to='/userprofile' onClick={() => collapseNavBar()}>
                      My Profile
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <button
                      className='nav-link' onClick={() => {
                        logOutFunction()
                        collapseNavBar()
                      }}
                    >
                      Log Out
                    </button>
                  </li>
                </>
                )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

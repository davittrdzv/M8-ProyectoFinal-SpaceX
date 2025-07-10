import mePic from '@/assets/mePic.png'

const About = () => {
  return (
    <div className='container mt-custom'>
      <div className='card mt-2 mb-2'>
        <h1 className='text-center'>About</h1>
      </div>

      <h1 className='text-center'>Welcome to my SpaceX Explorer Website!</h1>
      <img src={mePic} alt='Me' className='about-pic d-block mx-auto' />

      <div className='card mt-2 mb-2'>
        <h2 className='text-center'>About the Website</h2>
      </div>
      <div className='text-justify'>
        <p>
          This is my final project for Module 8 of the Web Development program at DEV.F. The goal was to create a front-end web app using real public data, user authentication, and responsive design.
        </p>
        <p>
          This website fetches real-time and historical data from the public SpaceX API — including upcoming launches, rocket specs, Starlink satellites, and even the Tesla Roadster in orbit. Users can create an account or log in using predefined users to unlock extra content.
        </p>
        <p>
          Depending on your role (admin or regular user), different features are available. For example, Starlink satellite data is only visible for logged-in users. Admins can also view a list of registered users, while regular users get a simplified experience.
        </p>
        <p>
          Everything is built with React and styled using Bootstrap 5. The routing is handled through React Router DOM, with protected routes and conditional rendering depending on user role and login status. I also implemented reusable card components for different types of SpaceX data, and global state is managed through two React Contexts: one for authentication and one for API data.
        </p>
        <p>
          You can log in using one of the following pre-registered users:
        </p>
        <ul>
          <li><b>User Role</b> — Email: <code>drstrange@marvel.com</code> | Password: <code>multiverso</code></li>
          <li><b>Admin Role</b> — Email: <code>superman@dc.com</code> | Password: <code>superman</code></li>
        </ul>
        <p>
          You can also create your own account via the <b>Sign Up</b> page. The authentication system is powered by a mock backend (hosted on Render), so no real email is required. Keep in mind that data will reset if the server goes idle for a while.
        </p>
      </div>

      <div className='card mt-2 mb-2'>
        <h2 className='text-center'>About Me</h2>
      </div>
      <div className='text-justify'>
        <p>
          My name is David. I'm from Mexico. I studied law at the Universidad Nacional Autónoma de México (Facultad de Estudios Superiores Acatlán).
          I've worked as a lawyer since 2010 and until April 30, 2024. In 2023, I decided to start a new path in programming. I've always liked computing,
          so now I'm studying Web Development.
        </p>
      </div>

      <a href='https://github.com/davittrdzv' target='_blank' rel='noopener noreferrer'>
        <svg
          width='98'
          height='96'
          xmlns='http://www.w3.org/2000/svg'
          className='github-icon d-block mx-auto'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z'
            fill='#A9A9A9'
          />
        </svg>
      </a>

      <div className='card mt-3 mb-2'>
        <h2 className='text-center'>External Links and Mentions</h2>
      </div>
      <div className='text-justify'>
        <ul>
          <li>
            <a
              href='https://github.com/warderer/json-server-jwt'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              Server Documentation (User Functionality)
            </a>
            <p className='mt-1'>This is the documentation for the server used in this project, which handles authentication and mock data.</p>
          </li>
          <li>
            <a
              href='https://ecommerce-json-jwt.onrender.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              Live API Server (User Functionality)
            </a>
            <p className='mt-1'>Live instance of the mock API for testing authentication and product data.</p>
          </li>
          <li>
            <a
              href='https://github.com/r-spacex/SpaceX-API/blob/master/docs/README.md'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              SpaceX API Documentation
            </a>
            <p className='mt-1'>This is the documentation for the API used in this project, which handles SpaceX data.</p>
          </li>
          <li>
            <a
              href='https://github.com/r-spacex/SpaceX-API'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              SpaceX API GitHub Repository
            </a>
            <p className='mt-1'>This GitHub repository hosts the open-source SpaceX API. It provides detailed information about SpaceX launches, rockets, capsules, payloads, Starlink satellites, and more.</p>
          </li>
          <li>
            <a
              href='https://github.com/davittrdzv/M8-ProyectoFinal-SpaceX'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              GitHub Repository (Project Code)
            </a>
            <p className='mt-1'>This is the full source code of this website for public reference.</p>
          </li>
          <li>
            <a
              href='https://edu.devf.la/en'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-custom p-1 rounded-3'
            >
              DEVF
            </a>
            <p className='mt-1'>DEV.F is the school where I'm currently studying Web Development.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default About

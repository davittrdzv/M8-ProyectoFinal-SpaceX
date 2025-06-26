import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RoutesIndex from '@/routes/RoutesIndex'
import { SpaceXProvider } from '@/context/SpaceXContext.jsx'
import { AuthProvider } from '@/context/AuthContext.jsx'
import SpaceXLogo from '@/components/SpaceXLogo'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SpaceXProvider>
          <NavBar />
          <SpaceXLogo className='logo-spacex-w mb-4 mt-custom' />
          <RoutesIndex />
        </SpaceXProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App

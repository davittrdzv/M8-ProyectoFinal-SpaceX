import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RoutesIndex from '@/routes/RoutesIndex'
import { SpaceXProvider } from '@/context/SpaceXContext.jsx'
import { AuthProvider } from '@/context/AuthContext.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SpaceXProvider>
          <NavBar />
          <RoutesIndex />
        </SpaceXProvider>
      </AuthProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RoutesIndex from '@/routes/RoutesIndex'
import { SpaceXProvider } from '@/context/SpaceXContext.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <SpaceXProvider>
        <NavBar />
        <RoutesIndex />
      </SpaceXProvider>
      <Footer />
    </BrowserRouter>
  )
}

export default App

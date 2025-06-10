import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import RoutesIndex from '@/routes/RoutesIndex'
import { SpaceXProvider } from '@/context/SpaceXContext.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <SpaceXProvider>
        <NavBar />
        <RoutesIndex />
      </SpaceXProvider>
    </BrowserRouter>
  )
}

export default App

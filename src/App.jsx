import { BrowserRouter } from 'react-router-dom'
import NavBar from '@/components/NavBar'
import RoutesIndex from '@/routes/RoutesIndex'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <RoutesIndex />
    </BrowserRouter>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'

import About from '@/pages/About'
import History from '@/pages/History'
import Home from '@/pages/Home'
import LaunchDetails from '@/pages/LaunchDetails'
import Launches from '@/pages/Launches'
import NotFound from '@/pages/NotFound'
import Roadster from '@/pages/Roadster'
import Rockets from '@/pages/Rockets'
import RocketDetails from '@/pages/RocketDetails'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Starlink from '@/pages/Starlink'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route path='/history' element={<History />} />
      <Route path='/' element={<Home />} />
      <Route path='/launches' element={<Launches />} />
      <Route path='/launches/:id' element={<LaunchDetails />} />
      <Route path='/roadster' element={<Roadster />} />
      <Route path='/rockets' element={<Rockets />} />
      <Route path='/rockets/:id' element={<RocketDetails />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/starlink' element={<Starlink />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesIndex

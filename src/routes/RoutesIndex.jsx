import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from '@/routeGuards/PrivateRoutes'
import PublicOnlyRoutes from '@/routeGuards/PublicOnlyRoutes'
import AdminOnlyRoutes from '@/routeGuards/AdminOnlyRoutes'
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
import UserProfile from '@/pages/UserProfile'
import AllUsers from '@/pages/AllUsers'

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
      <Route element={<PublicOnlyRoutes />}>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Route>
      <Route element={<AdminOnlyRoutes />}>
        <Route path='/allusers' element={<AllUsers />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/starlink' element={<Starlink />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default RoutesIndex

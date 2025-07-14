import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import LazyWithSpinner from '@/utilities/LazyWithSpinner'
import PrivateRoutes from '@/routeGuards/PrivateRoutes'
import PublicOnlyRoutes from '@/routeGuards/PublicOnlyRoutes'
import AdminOnlyRoutes from '@/routeGuards/AdminOnlyRoutes'
const About = lazy(() => import('@/pages/About'))
const History = lazy(() => import('@/pages/History'))
const Home = lazy(() => import('@/pages/Home'))
const LaunchDetails = lazy(() => import('@/pages/LaunchDetails'))
const Launches = lazy(() => import('@/pages/Launches'))
const NotFound = lazy(() => import('@/pages/NotFound'))
const Roadster = lazy(() => import('@/pages/Roadster'))
const Rockets = lazy(() => import('@/pages/Rockets'))
const RocketDetails = lazy(() => import('@/pages/RocketDetails'))
const SignIn = lazy(() => import('@/pages/SignIn'))
const SignUp = lazy(() => import('@/pages/SignUp'))
const Starlink = lazy(() => import('@/pages/Starlink'))
const UserProfile = lazy(() => import('@/pages/UserProfile'))
const AllUsers = lazy(() => import('@/pages/AllUsers'))

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/about' element={<LazyWithSpinner><About /></LazyWithSpinner>} />
      <Route path='/history' element={<LazyWithSpinner><History /></LazyWithSpinner>} />
      <Route path='/' element={<LazyWithSpinner><Home /></LazyWithSpinner>} />
      <Route path='/launches' element={<LazyWithSpinner><Launches /></LazyWithSpinner>} />
      <Route path='/launches/:id' element={<LazyWithSpinner><LaunchDetails /></LazyWithSpinner>} />
      <Route path='/roadster' element={<LazyWithSpinner><Roadster /></LazyWithSpinner>} />
      <Route path='/rockets' element={<LazyWithSpinner><Rockets /></LazyWithSpinner>} />
      <Route path='/rockets/:id' element={<LazyWithSpinner><RocketDetails /></LazyWithSpinner>} />
      <Route element={<PublicOnlyRoutes />}>
        <Route path='/signin' element={<LazyWithSpinner><SignIn /></LazyWithSpinner>} />
        <Route path='/signup' element={<LazyWithSpinner><SignUp /></LazyWithSpinner>} />
      </Route>
      <Route element={<AdminOnlyRoutes />}>
        <Route path='/allusers' element={<LazyWithSpinner><AllUsers /></LazyWithSpinner>} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path='/starlink' element={<LazyWithSpinner><Starlink /></LazyWithSpinner>} />
        <Route path='/userprofile' element={<LazyWithSpinner><UserProfile /></LazyWithSpinner>} />
      </Route>
      <Route path='*' element={<LazyWithSpinner><NotFound /></LazyWithSpinner>} />
    </Routes>
  )
}

export default RoutesIndex

import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuthContext()
  return isAuthenticated
    ? <Outlet />
    : <Navigate to='/signin' />
}

export default PrivateRoutes

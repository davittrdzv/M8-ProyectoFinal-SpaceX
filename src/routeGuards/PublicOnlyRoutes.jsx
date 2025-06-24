import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const PublicOnlyRoutes = () => {
  const { isAuthenticated } = useAuthContext()
  return isAuthenticated
    ? <Navigate to='/' />
    : <Outlet />
}

export default PublicOnlyRoutes

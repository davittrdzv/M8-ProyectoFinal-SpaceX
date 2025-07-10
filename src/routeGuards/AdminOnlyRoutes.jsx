import { Outlet, Navigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'

const AdminOnlyRoutes = () => {
  const { isAuthenticated, userPayload } = useAuthContext()
  return isAuthenticated && userPayload && userPayload.role === 'ADMIN'
    ? <Outlet />
    : <Navigate to='/signin' />
}

export default AdminOnlyRoutes

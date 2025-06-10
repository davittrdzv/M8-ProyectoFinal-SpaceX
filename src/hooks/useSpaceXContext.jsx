import { useContext } from 'react'
import { SpaceXContext } from '@/context/SpaceXContext'

export const useSpaceXContext = () => {
  const context = useContext(SpaceXContext)
  if (!context) {
    throw new Error('useSpaceXContext debe ser usado dentro de un SpaceXProvider')
  }
  return context
}

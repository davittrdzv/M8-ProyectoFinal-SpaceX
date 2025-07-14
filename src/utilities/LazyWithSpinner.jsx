import Spinner from '@/components/Spinner'
import { Suspense } from 'react'

const LazyWithSpinner = ({ children }) => {
  return (
    <Suspense fallback={<Spinner />}>{children}</Suspense>
  )
}

export default LazyWithSpinner

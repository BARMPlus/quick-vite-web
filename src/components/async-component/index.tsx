import { Suspense, useState, useRef, useEffect } from 'react'

import ErrorBoundary from '@/components/error-boundary'

const AsyncComponent = ({ children, loadingDelay = 0 }) => {
  const [loading, setLoading] = useState(false)
  const delay = useRef<any>(0)

  useEffect(() => {
    delay.current = setTimeout(() => setLoading(true), loadingDelay)
    return () => {
      clearTimeout(delay.current)
    }
  }, [loadingDelay])

  return (
    <ErrorBoundary>
      <Suspense fallback={loading && <div>页面加载中...</div>}>
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default AsyncComponent

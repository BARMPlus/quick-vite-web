import { useEffect } from 'react'
import { capturePageNotFound } from '@dian/app-utils'

const Warning404 = () => {
  useEffect(() => {
    capturePageNotFound()
  }, [])

  return <div>404</div>
}

export default Warning404

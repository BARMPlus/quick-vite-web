import { Component } from 'react'
import { Sentry } from '@dian/app-utils'

import type { ReactNode } from 'react'

class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    console.warn(`catchError: ${error}`)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error) {
    // Catch errors in any components below and re-render with error message
    Sentry.captureException(error)
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div />
    }

    // Normally, just render children
    return this.props.children
  }
}

export default ErrorBoundary

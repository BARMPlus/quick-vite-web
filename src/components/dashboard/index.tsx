import type { FC, ReactNode } from 'react'

interface DashboardLayoutProps {
  children?: ReactNode
}

const Dashboard: FC<DashboardLayoutProps> = (props) => {
  const { children } = props

  return (
    <>
      <div> dashboard layout</div>
      <div>{children}</div>
    </>
  )
}

export default Dashboard

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Dashboard } from '@/components'

import { generateRouteConfig, mapRoutes } from './utils'
import { publicRoutes, privateRoutes, redirectRoutes } from './routes'

const privateRoutesConfig = generateRouteConfig(privateRoutes)
const publicRoutesConfig = generateRouteConfig(publicRoutes)
const redirectRoutesConfig = generateRouteConfig(redirectRoutes)

function BaseRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {mapRoutes(publicRoutesConfig)}
        <Route
          path="/*"
          element={
            <Dashboard>
              <Routes>
                <Route path="/" element={<Navigate to="/demo" />} />
                {mapRoutes(privateRoutesConfig, true)}
                {mapRoutes(redirectRoutesConfig)}
              </Routes>
            </Dashboard>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default BaseRouter

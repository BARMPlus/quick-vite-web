import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AsyncComponent, Authorized } from '@/components'
import { getCacheToken } from '@/utils/cache'

import type { IRouteItem, IRouteComponentItem } from './routes/type.d'

export function supplyRoutes(routes, inheritAuthority?): IRouteItem[] {
  return routes.map((route) => {
    const config = {
      ...route,
      path: route.path || '',
      authority: route.authority || inheritAuthority,
    }

    if (route.children) {
      config.children = supplyRoutes(route.children, route.authority || inheritAuthority)
    }

    return config
  })
}

export function flattenRoutes(routes, { needDealSwitch = true } = {}) {
  const flattenedRoutes: IRouteItem[] = []

  ;(function recursion(_routes) {
    _routes.forEach((route) => {
      flattenedRoutes.push(route)
      const handleSwitch = needDealSwitch ? !route.isSwitch : true
      if (handleSwitch && route.children) {
        recursion(route.children)
        delete route.children
      }
    })
  })(routes)

  return flattenedRoutes
}

export function generateRouteConfig(routes): IRouteComponentItem[] {
  const handleComponent = (config): IRouteComponentItem[] => {
    return config.map((route) => {
      const { children, importer } = route
      return {
        ...route,
        Component: importer ? lazy(importer) : undefined,
        children: children ? handleComponent(children) : undefined,
      }
    })
  }

  return handleComponent(flattenRoutes(supplyRoutes(routes)))
}

export function mapRoutes(routes, isAuthorized = false) {
  const getIsUnauthorized = () => {
    const token = getCacheToken()
    return !token
  }

  const getIsForbidden = () => {
    return () => false
  }

  return routes.map(({ path, isSwitch, children, Component }) => {
    const UnauthorizedRouteContent = () => (
      <AsyncComponent loadingDelay={500}>{Component && <Component />}</AsyncComponent>
    )

    const AuthorizedRouteContent = () => (
      <Authorized getUnauthorized={getIsUnauthorized} getForbidden={getIsForbidden()}>
        {UnauthorizedRouteContent()}
      </Authorized>
    )

    const element = isAuthorized ? AuthorizedRouteContent() : UnauthorizedRouteContent()

    if (isSwitch && children) {
      return <Route key={path} path={`${path}/*`} element={<Routes>{mapRoutes(children, isAuthorized)}</Routes>} />
    }

    return <Route key={path} path={path} element={element} />
  })
}

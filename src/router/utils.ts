import { lazy } from 'react'

import type { IRouteItem, IRouteComponentItem } from './routes/type.d'

export function supplyRoutes(
  routes,
  parentPath = '',
  inheritAuthority?,
): IRouteItem[] {
  return routes.map((route) => {
    const config = {
      ...route,
      path: parentPath + (route.path || ''),
      authority: route.authority || inheritAuthority,
    }

    if (route.children) {
      config.children = supplyRoutes(
        route.children,
        parentPath + (route.path || ''),
        route.authority || inheritAuthority,
      )
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

import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AsyncComponent, Authorized } from '@/components'
import { getCacheToken } from '@/utils/cache'

import type { IRouteComponentItem } from './routes/type.d'

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

  return handleComponent(routes)
}

export function mapRoutes(routes, isAuthorized = false) {
  const getIsUnauthorized = () => {
    const token = getCacheToken()
    return !token
  }

  const getIsForbidden = () => {
    return () => false
  }

  return routes.map(({ path, children, Component }) => {
    const UnauthorizedRouteContent = (props) => (
      <AsyncComponent loadingDelay={500}>
        {Component ? <Component>{props.children}</Component> : props.children}
      </AsyncComponent>
    )

    const AuthorizedRouteContent = (props) => (
      <Authorized getUnauthorized={getIsUnauthorized} getForbidden={getIsForbidden()}>
        <UnauthorizedRouteContent {...props} />
      </Authorized>
    )

    const Element = isAuthorized ? AuthorizedRouteContent : UnauthorizedRouteContent

    if (children) {
      return (
        <Route
          key={path}
          path={`${path}/*`}
          element={
            <Element>
              <Routes>{mapRoutes(children, isAuthorized)}</Routes>
            </Element>
          }
        />
      )
    }

    return <Route key={path} path={path} element={<Element />} />
  })
}

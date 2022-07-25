import { Router, Route, Redirect, Switch } from 'react-router-dom'
import { parse } from 'query-string'

import { AsyncComponent, Authorized, Dashboard } from '@/components'
import { getCacheToken } from '@/utils/cache'

import { generateRouteConfig } from './utils'
import { publicRoutes, privateRoutes, redirectRoutes } from './routes'

const privateRoutesConfig = generateRouteConfig(privateRoutes)
const publicRoutesConfig = generateRouteConfig(publicRoutes)
const redirectRoutesConfig = generateRouteConfig(redirectRoutes)

function getIsUnauthorized() {
  const token = getCacheToken()
  return !token
}

function getIsForbidden() {
  return () => false
}

function mapRoutes(routes, isAuthorized = false) {
  return routes.map(({ path, Component }) => {
    const UnauthorizedRouteContent = (children) => (
      <AsyncComponent loadingDelay={500}>
        {Component ? <Component>{children}</Component> : children}
      </AsyncComponent>
    )

    const AuthorizedRouteContent = (children) => (
      <Authorized
        getUnauthorized={getIsUnauthorized}
        getForbidden={getIsForbidden()}
      >
        {UnauthorizedRouteContent(children)}
      </Authorized>
    )

    const renderRoute = (props, ChildrenComponent?) => {
      function parseRouteProps({ location }) {
        location.query = parse(location.search) || {}
      }

      parseRouteProps(props)
      return isAuthorized
        ? AuthorizedRouteContent(ChildrenComponent)
        : UnauthorizedRouteContent(ChildrenComponent)
    }

    return <Route exact key={path} path={path} render={renderRoute} />
  })
}

function BaseRouter({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {mapRoutes(publicRoutesConfig)}
        <Route path="/">
          <Dashboard>
            <Switch>
              <Redirect exact from="/" to="/" />
              {mapRoutes(privateRoutesConfig, true)}
              {mapRoutes(redirectRoutesConfig)}
            </Switch>
          </Dashboard>
        </Route>
      </Switch>
    </Router>
  )
}

export default BaseRouter

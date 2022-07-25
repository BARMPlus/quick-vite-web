import { createLogger } from 'redux-logger'
import createSentryMiddleware from 'redux-sentry-middleware'

import { Sentry, isRealEnv } from '@dian/app-utils'

const middlewares = [
  createSentryMiddleware(Sentry, {
    // options
  }),
]

if (!isRealEnv()) {
  const ignoreList = ['loading/show', 'loading/hide']

  middlewares.push(
    createLogger({
      // disabled global actions such as loading action
      // created by rematch loading plugin.
      predicate(getState, action) {
        return !action.type.includes('@@') && !ignoreList.includes(action.type)
      },
      collapsed: true,
      diff: true,
    }),
  )
}

export default middlewares

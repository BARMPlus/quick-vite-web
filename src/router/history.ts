import { createBrowserHistory } from 'history'
import { stringify } from 'query-string'

import type { History, LocationDescriptorObject } from 'history'

export interface ILocationDescriptor extends LocationDescriptorObject {
  query?: Record<string, any>
}

export type rewriteHistoryFnType = (
  fn: (...args: any[]) => void,
  params: History.LocationDescriptor | ILocationDescriptor,
) => void

const rewriteHistoryFn: rewriteHistoryFnType = (fn, params) => {
  if (typeof params === 'object') {
    const { query, search, ...restParams } = params as ILocationDescriptor
    return fn({
      ...restParams,
      search: search || stringify(query || {}),
    })
  }
  fn(params)
}

export interface IHistory extends History {
  push(params: History.LocationDescriptor | ILocationDescriptor)
  replace(params: History.LocationDescriptor | ILocationDescriptor)
}

const history: IHistory = createBrowserHistory({
  basename: '/',
})

const { push, replace } = history

history.push = (params) => rewriteHistoryFn(push, params)
history.replace = (params) => rewriteHistoryFn(replace, params)

export default history

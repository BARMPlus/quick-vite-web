import type { LazyExoticComponent, FC } from 'react'

export interface IRouteItem {
  title?: string
  path?: string
  importer?: () => Promise<any>
  children?: IRouteItem[]
}

export interface IRouteComponentItem extends IRouteItem {
  Component: LazyExoticComponent<FC>
}

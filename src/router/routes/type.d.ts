import type { LazyExoticComponent, FC } from 'react'

export interface IRouteItem {
  title?: string
  path?: string
  importer?: () => Promise<any>
  /**
   * @description 是否不拍平children， false：拍平
   * @type {boolean}
   * @memberof IRouteItem
   */
  isSwitch?: boolean
  children?: IRouteItem[]
}

export interface IRouteComponentItem extends IRouteItem {
  Component: LazyExoticComponent<FC>
}

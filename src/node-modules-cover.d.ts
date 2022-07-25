import { Location } from 'history'
import { DefaultRootState } from 'react-redux'

declare module 'history' {
  export interface Location {
    query: Record<string, any>
  }
}

declare module 'react-redux' {
  export interface DefaultRootState {
    [propName: string]: any
  }
  export function useDispatch<TDispatch = any>(): TDispatch
}

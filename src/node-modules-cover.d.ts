import { DefaultRootState } from 'react-redux'

declare module 'react-redux' {
  export interface DefaultRootState {
    [propName: string]: any
  }
  export function useDispatch<TDispatch = any>(): TDispatch
}

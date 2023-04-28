declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

interface IBaseOptions {
  label: any
  value: any
  [prop: string]: any
}

interface ResponseError {
  responseError: boolean
  message: string
  code: string | number
  status: number
  response: any
  processed: boolean
}
